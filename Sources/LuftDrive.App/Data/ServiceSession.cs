using LuftDrive.App.Shared.Components;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuftDrive.App.Data
{
    public class ServiceSession : IDisposable
    {
        private bool _disposed;

        private List<Window> _windows;
        private List<Icon>   _desktopIcons;



        public void Dispose()
        {
            if (_disposed)
                return;

            _disposed = true;
        }
    }
}
