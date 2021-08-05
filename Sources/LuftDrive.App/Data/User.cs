using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuftDrive.App.Data
{
    public class User
    {
        public Guid Id { get; set; }
        public Guid? Group { get; set; }

        public string Username { get; set; }
        public string Password { get; set; }
        public string PasswordSalt { get; set; }

        public string Nickname { get; set; }
        public string Affiliation { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Detail { get; set; }
        public Guid? ProfileImage { get; set; }

        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime? PasswordExpires { get; set; }
        public DateTime? SuspendUntil { get; set; }

    }
}
