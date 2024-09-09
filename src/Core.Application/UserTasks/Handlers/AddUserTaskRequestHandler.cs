namespace Core.Application.Handler;

public class AddUserTaskRequestHandler : IRequestHandler<AddUserTaskCommand, UserTaskDto>
{
    private readonly IUserTaskService _service;

    public AddUserTaskRequestHandler(IUserTaskService service)
    {
        _service = service;
    }

    public Task<UserTaskDto> Handle(AddUserTaskCommand request, CancellationToken cancellationToken)
    {
        return _service.AddUserTaskAsync(request);
    }
}