package org.wcci.apimastery.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String imgUrl;
    private float rating;
    private String artist;
    @OneToMany(mappedBy = "album")
    private Collection<Song> songs;
    private String recordLabel;
    @ElementCollection
    private Collection<String> comments;

    public Album(String title, String imgUrl, float rating, Collection<Song> songs, String recordLabel, String artist) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.rating = rating;
        this.songs = songs;
        this.recordLabel = recordLabel;
        this.artist = artist;
        this.comments = new ArrayList<>();
    }

    public long getId() {
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

    public Collection<Comment> getComments() {
        return comments;
    }

    public String getArtist() {
        return artist;
    }

    protected Album(){

    }
}
