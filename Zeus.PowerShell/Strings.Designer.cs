﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.33440
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Zeus.PowerShell {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Strings {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Strings() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Zeus.PowerShell.Strings", typeof(Strings).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Zeusfile &apos;{0}&apos; is invalid..
        /// </summary>
        internal static string InvalidZeusfile {
            get {
                return ResourceManager.GetString("InvalidZeusfile", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to There must be a root Service node in the file.
        /// </summary>
        internal static string InvalidZeusfile_Empty {
            get {
                return ResourceManager.GetString("InvalidZeusfile_Empty", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to The root node must be a Service node..
        /// </summary>
        internal static string InvalidZeusfile_InvalidResultType {
            get {
                return ResourceManager.GetString("InvalidZeusfile_InvalidResultType", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Multiple root nodes were found..
        /// </summary>
        internal static string InvalidZeusfile_MultipleResults {
            get {
                return ResourceManager.GetString("InvalidZeusfile_MultipleResults", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Zeusfile &apos;{0}&apos; is not named &quot;Zeusfile&quot;. This may cause issues with other tools..
        /// </summary>
        internal static string ZeusfileHasNonDefaultName {
            get {
                return ResourceManager.GetString("ZeusfileHasNonDefaultName", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Zeusfile &apos;{0}&apos; not found..
        /// </summary>
        internal static string ZeusfileNotFound {
            get {
                return ResourceManager.GetString("ZeusfileNotFound", resourceCulture);
            }
        }
    }
}
