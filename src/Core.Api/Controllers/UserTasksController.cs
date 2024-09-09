namespace Core.Api.Controller;

[Route("dev/[controller]")]
[ApiController]
public class UserTasksController : ControllerBase
{
    private readonly IMediator _mediator;

    public UserTasksController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("search")]
    public async Task<IActionResult> SearchUserTasksAsync([FromBody] SearchUserTasksCommand command)
    {
        var response = await _mediator.Send(command);
        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> AddUserTaskAsync([FromBody] AddUserTaskCommand command)
    {
        var response = await _mediator.Send(command);
        return Ok(response);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUserTaskAsync([FromRoute] int id, [FromBody] UpdateUserTaskCommand command)
    {
        command.SetId(id);
        var response = await _mediator.Send(command);
        return Ok(response);
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteUserTasksAsync([FromBody] DeleteUserTasksCommand command)
    {
        var response = await _mediator.Send(command);
        return Ok(response);
    }
}