using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuftDrive.App.Data
{
    public class UserLoginLog
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;

        public string Address { get; set; }
        public bool Success { get; set; }
    }
}
