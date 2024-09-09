namespace Core.Application.Command;

public class DeleteUserTasksCommand : IRequest<BaseResponse>
{
    public IList<int> Ids { get; set; }

    public DeleteUserTasksCommand(IList<int> ids)
    {
        Ids = ids;
    }
}