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
    @ElementCollection
    private Collection<Float> ratings;
    private Float avgRating;
    private String artist;
    @ElementCollection
    private Collection<String> comments;
    @ManyToOne
    @JsonIgnore
    private Album album;

    public Song(String title, String link, float duration, Float initialRating, Album album, String artist) {
        this.title = title;
        this.link = link;
        this.duration = duration;
        this.ratings = new ArrayList<>();
        this.album = album;
        this.artist = artist;
        this.comments = new ArrayList<>();
        addRating(initialRating);
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
    public void addSongComment(String comment){
        comments.add(comment);
    }

    public Collection<Float> getRatings() {
        return ratings;
    }

    public Float getAvgRating() {
        return avgRating;
    }

    public void addRating(Float rating){
        rating = Math.min(5, rating);
        rating = Math.max(1, rating);
        ratings.add(rating);
        float total = 0;
        for (float currentRating: ratings) {
            total += currentRating;
        }
        avgRating = total/ratings.size();
    }

}
