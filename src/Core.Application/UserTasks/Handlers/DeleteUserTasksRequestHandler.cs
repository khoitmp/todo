namespace Core.Application.Handler;

public class DeleteUserTasksRequestHandler : IRequestHandler<DeleteUserTasksCommand, BaseResponse>
{
    private readonly IUserTaskService _service;

    public DeleteUserTasksRequestHandler(IUserTaskService service)
    {
        _service = service;
    }

    public Task<BaseResponse> Handle(DeleteUserTasksCommand request, CancellationToken cancellationToken)
    {
        return _service.DeleteUserTaskAsync(request);
    }
}