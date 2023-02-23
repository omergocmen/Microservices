using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

IConfiguration configuration = new ConfigurationBuilder()
                            .AddJsonFile($"configuration.{builder.Environment.EnvironmentName}.json", true, true)
                            .Build();

builder.Services.AddOcelot(configuration);

builder.Services.AddAuthentication().AddJwtBearer("GatewayAuthenticationScheme", options =>
{
    options.Authority = builder.Configuration["IdentityServerURL"];
    options.Audience = "resource_gateway";
    options.RequireHttpsMetadata = false;
});

builder.Logging.AddConsole();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseOcelot().Wait();
app.Run();
