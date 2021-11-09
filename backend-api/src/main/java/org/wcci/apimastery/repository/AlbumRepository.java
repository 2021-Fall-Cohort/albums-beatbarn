package org.wcci.apimastery.repository;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.models.Album;

public interface AlbumRepository extends CrudRepository<Album,Long> {
}
