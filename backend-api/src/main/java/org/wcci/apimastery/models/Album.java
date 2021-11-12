package org.wcci.apimastery.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String imgUrl;
    private float rating;
    private String artist;
    @OneToMany(mappedBy = "album")
    private Collection<Song> songs;
    private String recordLabel;
    @ElementCollection
    private Collection<String> comments;

    public Album(String title, String imgUrl, float rating, String recordLabel, String artist, Song...songs) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.rating = rating;
        this.songs = Arrays.asList(songs);
        this.recordLabel = recordLabel;
        this.artist = artist;
        this.comments = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public float getRating() {
        return rating;
    }

    public Collection<Song> getSongs() {
        return songs;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public String getArtist() {
        return artist;
    }

    protected Album(){

    }
}
