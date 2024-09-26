namespace Core.ApplicationExtension.Extension;

public static class ApplicationExtension
{
    public const string SERVICE_NAME = "core-service";

    public static void AddApplicationServices(this IServiceCollection serviceCollection)
    {
        // Lib services
        serviceCollection.AddInternalLogging();
        serviceCollection.AddUserContext();
        serviceCollection.AddDynamicSearch();
        serviceCollection.AddMediatR(typeof(ApplicationExtension).GetTypeInfo().Assembly);

        // Internal services
        serviceCollection.AddScoped<IUserService, UserService>();
        serviceCollection.AddScoped<IUserTaskService, UserTaskService>();
    }
}