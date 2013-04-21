﻿using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Fclp;
using NLog;
using Zeus.Core;

namespace Zeus.Commands
{
    [Command(name: "add", group: "service")]
    public class AddServiceCommand : ICommand
    {
        private const string UsageString = "Usage: service add <name> <type>";

        public Logger Log { get; set; }

        public string Name { get; set; }
        public string Type { get; set; }

        [ImportingConstructor]
        public AddServiceCommand(ILoggingService logging)
        {
            Log = logging.GetLogger("AddService");
        }

        public void Execute(IEnumerable<string> args)
        {
            if (!ParseArguments(args)) { return; }
            Log.Info("Adding {0} service named {1} to Zeusfile", Type, Name);

            // Create a Zeus Context
            var context = new ZeusContext(Environment.CurrentDirectory);

            Log.Error("Finish this command.");
        }

        private bool ParseArguments(IEnumerable<string> args)
        {
            Name = args.FirstOrDefault();
            if (String.IsNullOrEmpty(Name))
            {
                Log.Error("Missing 'name' argument");
                Log.Error(UsageString);
                return false;
            }

            Type = args.Skip(1).FirstOrDefault();
            if (String.IsNullOrEmpty(Type))
            {
                Log.Error("Missing 'type' argument");
                Log.Error(UsageString);
                return false;
            }
            return true;
        }
    }
}
