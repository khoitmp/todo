namespace Core.Persistence.Repository
{
    public class UserTaskRepository : GenericRepository<UserTask, int>, IUserTaskRepository
    {
        private CoreDbContext _context;

        public UserTaskRepository(CoreDbContext dbContext)
            : base(dbContext)
        {
            _context = dbContext;
        }

        public override IQueryable<UserTask> AsQueryable() => _context.UserTasks;

        protected override void Update(UserTask requestObject, UserTask targetObject)
        {
            targetObject.Description = requestObject.Description;
            targetObject.Completed = requestObject.Completed;
            targetObject.UpdatedUtc = DateTime.UtcNow;
        }
    }
}