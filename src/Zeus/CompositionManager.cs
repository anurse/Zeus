﻿using System;
using System.Collections.Generic;
using System.ComponentModel.Composition.Hosting;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zeus
{
    public static class CompositionManager
    {
        public static TRoot Compose<TRoot>()
        {
            var container = new CompositionContainer(
                new AggregateCatalog(
                    new AssemblyCatalog(typeof(CompositionManager).Assembly),
                    new AssemblyCatalog(typeof(ZeusContext).Assembly)));
            return container.GetExportedValue<TRoot>();
        }
    }
}
