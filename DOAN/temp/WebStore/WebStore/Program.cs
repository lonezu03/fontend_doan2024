﻿
using WebStore.Context;
using Microsoft.EntityFrameworkCore;
using WebStore.Reposiroty.Interface;
using WebStore.Service.IService;
using WebStore.Reposiroty;
using WebStore.Service;
using WebStore.Repository;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using WebStore.Helpers;
using AutoMapper;
using WebStore.Repository.Interface;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
Environment.SetEnvironmentVariable("DOTNET_SYSTEM_GLOBALIZATION_INVARIANT", "false");

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



// token
// Đọc cấu hình JWT từ appsettings.json
var jwtConfig = builder.Configuration.GetSection("Jwt");
var key = Encoding.UTF8.GetBytes(jwtConfig["Key"]);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtConfig["Issuer"],
        ValidAudience = jwtConfig["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(key)
    };
});
//token
//dang ky services
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IOrderService, OrderService>();

builder.Services.AddScoped<IColorRepository, ColorRepository>();
builder.Services.AddScoped<IColorService, ColorService>();

builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ICategoryService, CategoryService>();

builder.Services.AddScoped<ISizeRepository, SizeRepository>();
builder.Services.AddScoped<ISizeService, SizeService>();

builder.Services.AddScoped<IDescriptionRepository, DescriptionRepository>();
builder.Services.AddScoped<IDescriptionService,DescriptionService >();

builder.Services.AddScoped<IImageRepository,ImageRepository >();
builder.Services.AddScoped<IImageService, ImageService>();

builder.Services.AddScoped<IVariantRepository, VariantRepository>();
builder.Services.AddScoped<IVariantService, VariantService>();

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
});

//cors

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});//
builder.Services.AddAutoMapper(typeof(MappingProfile));

builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
// Trong Program.cs
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        b => b.MigrationsAssembly("WebStore") // Tên của dự án chứa migration
    ));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//token
builder.Services.AddAuthorization();
// AddTutoMapper




app.UseCors("AllowAll");



//
app.UseAuthentication();
app.UseAuthorization();
//token
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
