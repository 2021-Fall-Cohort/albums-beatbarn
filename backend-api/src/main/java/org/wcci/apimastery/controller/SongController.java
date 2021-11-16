package org.wcci.apimastery.controller;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.models.Album;
import org.wcci.apimastery.models.Song;
import org.wcci.apimastery.repository.AlbumRepository;
import org.wcci.apimastery.repository.SongRepository;

import java.util.Collection;

@RequestMapping("/song")
@RestController
public class SongController {
    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public SongController(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }
    @GetMapping("/{id}")
    public Song retrieveSongById(@PathVariable Long id){
        return songRepo.findById(id).get();
    }

    @PostMapping("/")
    public Iterable<Song> addSong(@RequestBody Song songToAdd){
        songRepo.save(songToAdd);
        return songRepo.findAll();
    }

    @DeleteMapping("/{id}")
    public Album deleteSong(@PathVariable Long id) {
        Album tempAlbum = songRepo.findById(id).get().getAlbum();
        songRepo.deleteById(id);
        return albumRepo.findById(tempAlbum.getId()).get();

    }
}
