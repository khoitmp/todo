namespace Core.Application.Command;

public class AddUserTaskCommand : IRequest<UserTaskDto>
{
    public string Description { get; set; }
    public bool Completed { get; set; }

    static Func<AddUserTaskCommand, UserTask> Converter = Projection.Compile();

    private static Expression<Func<AddUserTaskCommand, UserTask>> Projection
    {
        get
        {
            return command => new UserTask
            {
                Description = command.Description,
                Completed = command.Completed,
                CreatedUtc = DateTime.UtcNow,
                UpdatedUtc = DateTime.UtcNow
            };
        }
    }

    public static UserTask Create(AddUserTaskCommand command)
    {
        if (command != null)
        {
            return Converter(command);
        }
        return null;
    }
}