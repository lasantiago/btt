namespace BTT.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using BTT.Entities;
    using System.Collections.Generic;
    using System.Data.Entity.Validation;
    using System.Text;

    internal sealed class Configuration : DbMigrationsConfiguration<BTT.BTTDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(BTT.BTTDBContext context)
        {
            var items = new List<Item>
            {
                new Item{ItemId = new Guid("488b56d5-b52f-4d09-bc48-7f4b0743cbac"), ItemCode = "49000001327", ItemName="Sprite- Soft Drink- 12 Oz Can", ItemPrice = 500},
                new Item{ItemId = Guid.NewGuid(), ItemCode = "051228637677", ItemName="Hatuey Galleta de Soda", ItemPrice = 500},
            };

            // Adds all base users to the context 
            items.ForEach(us => context.Items.AddOrUpdate(usr => usr.ItemCode, us));

            try
            {
                //context.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                StringBuilder sb = new StringBuilder();

                foreach (var failure in ex.EntityValidationErrors)
                {
                    sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                    foreach (var error in failure.ValidationErrors)
                    {
                        sb.AppendFormat("- {0} : {1}", error.PropertyName, error.ErrorMessage);
                        sb.AppendLine();
                    }
                }

                throw new DbEntityValidationException(
                    "Entity Validation Failed - errors follow:\n" +
                    sb.ToString(), ex
                ); // Add the original exception as the innerException
            }
        }
    }
}
