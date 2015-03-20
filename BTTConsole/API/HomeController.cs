using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace BTTConsole.API
{
    class HomeController : ApiController
    {
        public HttpResponseMessage GetAll()
        {
            return new HttpResponseMessage
            {
                Content = new StringContent("Hello HTTP")
            };
        }
    }
}
