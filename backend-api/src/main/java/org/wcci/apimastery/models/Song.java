package org.wcci.apimastery.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String link;
    private float duration;
    private float rating;
    private String artist;
    @ElementCollection
    private Collection<String> comments;


    @ManyToOne
    @JsonIgnore
    private Album album;





    public Song(String title, String link, float duration, float rating, Album album, String artist) {
        this.title = title;
        this.link = link;
        this.duration = duration;
        this.rating = rating;
        this.album = album;
        this.artist = artist;
        this.comments = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getLink() {
        return link;
    }

    public float getDuration() {
        return duration;
    }

    public float getRating() {
        return rating;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public String getArtist() {
        return artist;
    }

    public Collection<String> getComments() {
        return comments;
    }

    protected Song(){
    }
}
