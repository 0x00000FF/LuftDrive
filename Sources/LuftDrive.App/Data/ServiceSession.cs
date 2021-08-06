using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuftDrive.App.Data
{
    public class ServiceSession : IDisposable
    {
        private bool _disposed;

        public void Dispose()
        {
            if (_disposed)
                return;

            _disposed = true;
        }
    }
}
