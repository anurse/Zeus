﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Zeus
{
    public interface ICommandMetadata
    {
        string Name { get; }
        string Group { get; }
    }
}
