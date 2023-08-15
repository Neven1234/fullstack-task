using Microsoft.EntityFrameworkCore;
using ToDoList.Nodels;

namespace ToDoList.Data
{
    public class TasksDbContext : DbContext
    {
        public TasksDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Tasks> tasks { get; set; }
    }
}
