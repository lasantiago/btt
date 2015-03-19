using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using BTT.Entities;

namespace BTTConsole.Controllers
{
    public class ItemsController : ApiController
    {
        Item[] i = new Item[]
            {
                new Item{ItemId = Guid.NewGuid(), ItemCode = "49000001327", ItemName="Sprite- Soft Drink- 12 Oz Can", ItemPrice = 500},
                new Item{ItemId = Guid.NewGuid(), ItemCode = "051228637677", ItemName="Hatuey Galleta de Soda", ItemPrice = 500},
            };

        public IEnumerable<Item> Get()
        {
            return new Item().GetAll();
        }

        public Item Get(string itemcode)
        {
            return new Item().CheckIfItemInDB(itemcode);
        }
    }
}
