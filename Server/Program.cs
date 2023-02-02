using FireSharp.Config;
using FireSharp.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Server;
using Server.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy  =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "https://securetoken.google.com/ebusiness-23ad0";
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "https://securetoken.google.com/ebusiness-23ad0",
            ValidateAudience = true,
            ValidAudience = "ebusiness-23ad0",
            ValidateLifetime = true
        };
    });

var app = builder.Build();

//app.UseHttpsRedirection();
app.UseCors();

app.MapControllers();

app.UseAuthorization();
app.UseAuthentication();

var client = new FireSharp.FirebaseClient(ToppingController.Config);

client.Set(
    "Toppings",
    new []
    {
        new Topping { Name = "Erdbeeren" },
        new Topping { Name = "Blaubeeren" },
        new Topping { Name = "Kinderschokolade" },
        new Topping { Name = "M&M's" },
        new Topping { Name = "Toffee" },
        new Topping { Name = "Oreo" },
        new Topping { Name = "Kokosnussstreusel" }
    }
);

app.Run();