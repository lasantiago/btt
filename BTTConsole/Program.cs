﻿using Microsoft.AspNet.SignalR;
using Microsoft.Owin.Cors;
using Owin;
using System;
using System.Data.Entity;
using System.Web.Http.SelfHost;
using System.Web.Http;
using System.Reflection;
using System.Diagnostics;

namespace BTTConsole
{
    class Program
    {
        static readonly Uri _baseAddress = new Uri("http://localhost:8080/");

        static void Main(string[] args)
        {
            Database.SetInitializer<BTT.BTTDBContext>(null);

            Assembly assembly = Assembly.GetExecutingAssembly();
            FileVersionInfo fvi = FileVersionInfo.GetVersionInfo(assembly.Location);
            string version = fvi.FileVersion;


            // Set up server configuration
            HttpSelfHostConfiguration config = new HttpSelfHostConfiguration(_baseAddress);
            config.Routes.MapHttpRoute(
              name: "DefaultApi",
              routeTemplate: "api/{controller}/{id}",
              defaults: new { id = RouteParameter.Optional }
            );
            // Create server
            var server = new HttpSelfHostServer(config);
            // Start listening
            server.OpenAsync().Wait();
            Console.WriteLine("ISG, SA - BarcodeToText");
            Console.WriteLine("Version: " + version);
            Console.WriteLine("URL: " + _baseAddress);
            Console.WriteLine("Presione ENTER para salir...");
            Console.ReadLine();
            server.CloseAsync().Wait();




            //while (true) // Loop indefinitely
            //{
            //    Console.WriteLine("Enter product code:"); // Prompt
            //    string code = Console.ReadLine(); // Get string from user

            //    if (code == String.Empty | code == null) // Check string
            //    {
            //        break;
            //    }

            //    using (SqlConnection sql = new SqlConnection(
            //    "Data Source=.;Initial Catalog=test;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False"))
            //    {

            //        //        using (OleDbConnection cn = new OleDbConnection(
            //        //@"Provider=vfpoledb;" +
            //        //@"Data Source=C:\Users\Luis\Dropbox\LS\Projects\ISG\Proyectos\Almacenes del Este\Integracion;" + //path without filename
            //        //@"Extended Properties=dBASE III;"))
            //        //        using (OleDbCommand cm = cn.CreateCommand())
            //        using (SqlCommand cm = sql.CreateCommand())
            //        {
            //            cm.CommandText = "SELECT ItemLookupCode, Description, Price from muestra where ItemLookupCode =" + code; // Supermercado Cumbre

            //            sql.Open();

            //            // cm.CommandText = "SELECT REF_FABRICANTE, NOMBRE, PRECIO FROM DEMO.dbf"; // Almacenes del Este

            //            //cm.CommandText = "SELECT referencia, nomprod, venprod FROM DEMO.dbf"; // Supermercado Caribe
            //            using (SqlDataReader dr = cm.ExecuteReader())
            //            {
            //                while (dr.Read())
            //                {
            //                    BTT.Entities.Item i = new BTT.Entities.Item(dr[0].ToString().TrimEnd(), dr[1].ToString().TrimEnd(), Convert.ToDouble(dr[2]));
            //                    Console.WriteLine(" Descripción: " + i.ItemName + " Precio: RD$" + i.ItemPrice);
            //                }
            //            }
            //            sql.Close();
            //        }
            //    }
            //}

            //BTT.Entities.Item i = new BTT.Entities.Item().CheckIfItemInDB(Console.ReadLine());
            //Console.WriteLine(i.ItemName + " RD$" + i.ItemPrice);
        }
    }

    class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();
        }
    }
    public class MyHub : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.addMessage(name, message);
        }
    }
}
