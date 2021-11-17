package org.wcci.apimastery.controller;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.models.Album;
import org.wcci.apimastery.models.Song;
import org.wcci.apimastery.repository.AlbumRepository;
import org.wcci.apimastery.repository.SongRepository;

@RequestMapping("/album")
@RestController
public class AlbumController {

    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public AlbumController(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/")
    public Iterable<Album> retrieveAllAlbums() {
        return albumRepo.findAll();
    }

    @GetMapping("/{id}")
    public Album retrieveSingleAlbumById(@PathVariable Long id) {
        return albumRepo.findById(id).get();
    }

    @PostMapping("/")
    public Iterable<Album> addAlbum(@RequestBody Album album){
        albumRepo.save(album);
        return albumRepo.findAll();
    }

    @PatchMapping("/{id}")
    public Album addComment(@PathVariable Long id, @RequestBody String newAlbumJson){
        Album tempAlbum = albumRepo.findById(id).get();
        String comment = newAlbumJson;
        tempAlbum.addComment(comment);
        albumRepo.save(tempAlbum);
        return albumRepo.findById(id).get();
    }

    @PutMapping("/")
    public Iterable<Album> editAlbum(@RequestBody Album albumToEdit){
        if(albumToEdit.getId() != null){
            albumRepo.save(albumToEdit);
        }
        return albumRepo.findAll();
    }

    @PatchMapping ("/{id}/song")
    public Album addSong(@RequestBody Song songToAdd, @PathVariable Long id){
        Album albumToAddSong = albumRepo.findById(id).get();
        songToAdd.setAlbum(albumToAddSong);

        songRepo.save(songToAdd);

        return albumRepo.findById(id).get();
    }
    @DeleteMapping("/{id}")
    public Iterable<Album> deleteAlbum(@PathVariable Long id){
        albumRepo.deleteById(id);
        return albumRepo.findAll();
    }
}
