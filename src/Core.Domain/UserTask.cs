namespace Core.Domain.Entity;

public class UserTask : IEntity<int>
{
    public int Id { get; set; }
    public string UserName { get; set; }
    public string Description { get; set; }
    public bool Completed { get; set; }
    public DateTime CreatedUtc { get; set; }
    public DateTime UpdatedUtc { get; set; }
    public bool Deleted { set; get; }
}