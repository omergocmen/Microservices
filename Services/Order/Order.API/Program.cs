using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Order.Infrastructure;
using Shared.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var requiredAuthorizePolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Remove("sub");

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    //buradaki ayarlarda diyoruz ki audience içerisinde resource_catalog olacak ve url'i ise IdentityServerUrl'den gelece
    options.Authority = builder.Configuration["IdentityServerURL"];
    options.Audience = "resource_order";
    options.RequireHttpsMetadata = false;
});


builder.Services.AddControllers(options =>
{
    options.Filters.Add(new AuthorizeFilter(requiredAuthorizePolicy));
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMediatR(typeof(Order.Application.Handlers.CreateOrderCommandHandler).Assembly);
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ISharedIdentityService, SharedIdentityService>();

builder.Services.AddDbContext<OrderDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), configure =>
            {
                configure.MigrationsAssembly("Order.Infrastructure");
            }));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseAuthentication();
app.MapControllers();

app.Run();
