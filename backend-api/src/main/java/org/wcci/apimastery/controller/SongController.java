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

    @PutMapping("/")
    public Album editSong(@RequestBody Song songToEdit, @PathVariable Long id){
        Album tempAlbum = albumRepo.findById(id).get();
        if(songToEdit.getId() != null){
            songRepo.save(songToEdit);
        }
        return albumRepo.findById(tempAlbum.getId()).get();
    }
    @PatchMapping("/{id}")
    public Song addCommentToSong(@PathVariable Long id, @RequestBody String newSongJson){
        Song tempSong = songRepo.findById(id).get();
        String comment = newSongJson;
        tempSong.addSongComment(comment);
        songRepo.save(tempSong);
        return songRepo.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public Album deleteSong(@PathVariable Long id) {
        Album tempAlbum = songRepo.findById(id).get().getAlbum();
        songRepo.deleteById(id);
        return albumRepo.findById(tempAlbum.getId()).get();

    }
}
