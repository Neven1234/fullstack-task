namespace ToDoList.Nodels
{
    public class Tasks
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public bool Completed { get; set; }
    }
}
