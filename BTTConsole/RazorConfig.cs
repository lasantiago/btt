using Nancy.ViewEngines.Razor;
using System.Collections.Generic;

namespace BTTConsole
{
    public class RazorConfig : IRazorConfiguration
    {
        public IEnumerable<string> GetAssemblyNames()
        {
            yield return "HyRes.Models";
            yield return "HyRes.Website";
        }

        public IEnumerable<string> GetDefaultNamespaces()
        {
            yield return "HyRes.Models";
            yield return "HyRes.Website.Infrastructure.Helpers";
        }

        public bool AutoIncludeModelNamespace
        {
            get { return true; }
        }
    }

}
