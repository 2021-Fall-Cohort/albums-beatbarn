package org.wcci.apimastery.repository;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.models.Song;

public interface SongRepository extends CrudRepository<Song,Long> {
}
