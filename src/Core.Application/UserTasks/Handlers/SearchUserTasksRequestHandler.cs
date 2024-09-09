namespace Core.Application.Handler;

public class UpdateUserTaskRequestHandler : IRequestHandler<SearchUserTasksCommand, BaseSearchResponse<UserTaskDto>>
{
    private readonly IUserContext _userContext;
    private readonly IUserTaskService _service;

    public UpdateUserTaskRequestHandler(IUserContext userContext, IUserTaskService service)
    {
        _userContext = userContext;
        _service = service;
    }

    public Task<BaseSearchResponse<UserTaskDto>> Handle(SearchUserTasksCommand request, CancellationToken cancellationToken)
    {
        var additionalFilters = new List<FilterCriteria>()
        {
            new
            (
                queryKey: FieldNames.USER_NAME,
                queryType: QueryType.TEXT,
                queryValue: _userContext.UserName,
                operation: Operations.EQUALS
            )
        };

        return _service.SearchWithSecurityAsync(request, additionalFilters);
    }
}