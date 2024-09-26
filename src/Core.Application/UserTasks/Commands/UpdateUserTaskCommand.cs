namespace Core.Application.Command;

public class UpdateUserTaskCommand : IRequest<BaseResponse>
{
    public int Id { get; set; }
    public string Description { get; set; }
    public bool Completed { get; set; }

    public void SetId(int id)
    {
        Id = id;
    }

    static Func<UpdateUserTaskCommand, UserTask> Converter = Projection.Compile();

    private static Expression<Func<UpdateUserTaskCommand, UserTask>> Projection
    {
        get
        {
            return command => new UserTask
            {
                Id = command.Id,
                Description = command.Description,
                Completed = command.Completed,
                UpdatedUtc = DateTime.UtcNow
            };
        }
    }

    public static UserTask Create(UpdateUserTaskCommand command)
    {
        if (command != null)
        {
            return Converter(command);
        }
        return null;
    }
}