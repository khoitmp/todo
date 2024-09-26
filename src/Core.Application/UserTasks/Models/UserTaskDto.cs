namespace Core.Application.Model;

public class UserTaskDto
{
    public int Id { get; set; }
    public string UserName { get; set; }
    public string Description { get; set; }
    public bool Completed { get; set; }
    public DateTime CreatedUtc { get; set; }
    public DateTime UpdatedUtc { get; set; }

    private static Func<UserTask, UserTaskDto> Converter = Projection.Compile();

    public static Expression<Func<UserTask, UserTaskDto>> Projection
    {
        get
        {
            return entity => new UserTaskDto
            {
                Id = entity.Id,
                UserName = entity.UserName,
                Description = entity.Description,
                Completed = entity.Completed,
                CreatedUtc = entity.CreatedUtc,
                UpdatedUtc = entity.UpdatedUtc
            };
        }
    }

    public static UserTaskDto Create(UserTask entity)
    {
        if (entity == null)
            return null;
        return Converter(entity);
    }
}