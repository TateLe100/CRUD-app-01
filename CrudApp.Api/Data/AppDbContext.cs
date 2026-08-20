using CrudApp.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudApp.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}
    
    public DbSet<Note> Notes { get; set; }
}