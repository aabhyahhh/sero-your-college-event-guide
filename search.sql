CREATE TABLE clubs (
    id VARCHAR(10) PRIMARY KEY,
    club_name VARCHAR(255) NOT NULL,
    club_description TEXT NOT NULL,
    club_page_url VARCHAR(255) NOT NULL,
    keywords TEXT
);

INSERT INTO clubs (id, club_name, club_description, club_page_url, keywords) VALUES
('001', 'Coreographia', 'The official dance society', 'coreographia.html', 'dance, choreography, performance'),
('002', 'Aperture', 'The official photography club', 'aperture.html', 'photography, camera');