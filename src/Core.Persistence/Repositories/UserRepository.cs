namespace Core.Persistence.Repository;

public class UserRepository : GenericRepository<User, Guid>, IUserRepository
{
    private CoreDbContext _context;

    public UserRepository(CoreDbContext dbContext)
        : base(dbContext)
    {
        _context = dbContext;
    }

    public override IQueryable<User> AsQueryable() => _context.Users;

    protected override void Update(User requestObject, User targetObject)
    {
        targetObject.Password = requestObject.Password;
        targetObject.UpdatedUtc = requestObject.UpdatedUtc;
    }
}