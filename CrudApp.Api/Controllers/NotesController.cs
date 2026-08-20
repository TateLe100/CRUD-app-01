using CrudApp.Api.Data;
using CrudApp.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CrudApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NotesController : ControllerBase
{
    private readonly ILogger<NotesController> _logger;
    private readonly AppDbContext _context;
    
    public NotesController(AppDbContext context,  ILogger<NotesController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Note>>> GetAll()
    {
        return await _context.Notes.OrderBy(x => x.UpdatedAt).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Note>> GetById(int id)
    {
        var note = await _context.Notes.FindAsync(id);
        if (note == null) return NotFound();
        return note;
    }

    [HttpPost]
    public async Task<ActionResult<Note>> Create(Note note)
    {
        note.CreatedAt = DateTime.UtcNow;
        note.UpdatedAt = null;
        _context.Notes.Add(note);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = note.Id }, note);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Note note)
    {
        if (id != note.Id) return BadRequest();

        var existing = await _context.Notes.FindAsync(id);
        if (existing == null) return NotFound();

        existing.Title = note.Title;
        existing.Content = note.Content;
        existing.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var note = await _context.Notes.FindAsync(id);
        if (note == null) return NotFound();
        _context.Notes.Remove(note);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}