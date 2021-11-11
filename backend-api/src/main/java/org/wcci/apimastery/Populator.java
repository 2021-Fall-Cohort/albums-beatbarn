package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.models.Album;
import org.wcci.apimastery.models.Song;
import org.wcci.apimastery.repository.AlbumRepository;
import org.wcci.apimastery.repository.SongRepository;

@Component
public class Populator implements CommandLineRunner {
    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public Populator(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }
    @Override
    public void run(String... args) throws Exception{
        Album album1 = new Album("Blue Record","",5f,"Relapse Records","Baroness");
        albumRepo.save(album1);
        Song song1 = new Song("Swollen and Halo","",6.35f,5f,album1,"Baroness");
        songRepo.save(song1);
        Song song2 = new Song("A Horse Called Golgotha","",5.21f,4f,album1,"Baroness");
        songRepo.save(song2);
    }
}
