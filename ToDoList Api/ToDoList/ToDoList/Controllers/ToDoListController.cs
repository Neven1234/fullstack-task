using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;
using ToDoList.Models;
using ToDoList.Nodels;

namespace ToDoList.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoListController : Controller
    {
        private readonly TasksDbContext tasksDbContext;

        public ToDoListController(TasksDbContext tasksDbContext) {
            this.tasksDbContext = tasksDbContext;
        }
        [HttpGet]
        public IActionResult GetAllTasks()
        {
            return Ok(tasksDbContext.tasks.ToList());
        }
        [HttpPost]
        public IActionResult AddTask(AddTasks add)
        {
            var taskaya = new Tasks()
            {
                Id = Guid.NewGuid(),
                Description = add.Description,
                Date = add.Date,
                Completed = add.Completed,
            };
            tasksDbContext.tasks.Add(taskaya);
            tasksDbContext.SaveChanges();
            return Ok(taskaya);
        }
        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetTask([FromRoute] Guid id)
        {
            var taska=tasksDbContext.tasks.FirstOrDefault(x => x.Id == id);
            if(taska == null)
            {
                return NotFound();
            }
            return Ok(taska);
        }
        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateTask([FromRoute] Guid id, UpdateTaskscs update)
        {
            var taskUpdated = tasksDbContext.tasks.Find(id);
            if (taskUpdated != null)
            {
                taskUpdated.Description = update.Description;
                taskUpdated.Date = update.Date;
                taskUpdated.Completed = update.Completed;
                tasksDbContext.SaveChanges();
                return Ok(taskUpdated);
            }
            return NotFound();
        }

    }
}
