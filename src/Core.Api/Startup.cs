namespace Core.Api;

public class Startup
{
    public IConfiguration Configuration { get; }
    public IWebHostEnvironment Environment;

    public Startup(IConfiguration configuration, IWebHostEnvironment environment)
    {
        Configuration = configuration;
        Environment = environment;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplicationServices();
        services.AddPersistenceServices();
        services.AddControllers(option =>
        {
            // Global exception
            option.AddExceptionHandling();
        }).AddNewtonsoftJson(option =>
        {
            option.SerializerSettings.DateFormatString = Defaults.JsonSerializerSetting.DateFormatString;
            option.SerializerSettings.ReferenceLoopHandling = Defaults.JsonSerializerSetting.ReferenceLoopHandling;
            option.SerializerSettings.DateParseHandling = Defaults.JsonSerializerSetting.DateParseHandling;
        });
        services.AddCors(options =>
        {
            options.AddPolicy(InDefaults.ALLOW_ANY_ORIGIN,
                builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
        });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseCors(InDefaults.ALLOW_ANY_ORIGIN);
        app.UseRouting();
        app.UseWhen(
           context => !context.Request.Path.Value.EndsWith("/login"),
           builder => builder.UseMiddleware<UserContextMiddleware>()
        );
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}