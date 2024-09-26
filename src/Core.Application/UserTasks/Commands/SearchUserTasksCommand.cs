namespace Core.Application.Command;

public class SearchUserTasksCommand : BaseSearchCriteria, IRequest<BaseSearchResponse<UserTaskDto>>
{
    public SearchUserTasksCommand()
    {
        PageSize = 20;
        PageIndex = 0;
    }
}