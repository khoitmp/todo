namespace Core.Application.Handler;

public class UpdateUserTasksRequestHandler : IRequestHandler<UpdateUserTaskCommand, BaseResponse>
{
    private readonly IUserTaskService _service;

    public UpdateUserTasksRequestHandler(IUserTaskService service)
    {
        _service = service;
    }

    public Task<BaseResponse> Handle(UpdateUserTaskCommand request, CancellationToken cancellationToken)
    {
        return _service.UpdateUserTaskAsync(request);
    }
}