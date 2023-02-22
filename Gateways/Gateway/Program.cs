using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Host.ConfigureAppConfiguration((hostingContext, config) =>
{
    var item = hostingContext.HostingEnvironment.EnvironmentName;
    config.SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
    .AddJsonFile("appsettings.json", true, true)
    .AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", true, true)
    .AddJsonFile($"configuration.{hostingContext.HostingEnvironment.EnvironmentName}.json")
    .AddEnvironmentVariables();
});


builder.Services.AddOcelot();
var app = builder.Build();
app.UseOcelot();
app.Run();
