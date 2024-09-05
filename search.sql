CREATE TABLE clubs (
    id VARCHAR(10) PRIMARY KEY,
    club_name VARCHAR(255) NOT NULL,
    club_description TEXT NOT NULL,
    club_page_url VARCHAR(255) NOT NULL,
    keywords TEXT
);

INSERT INTO clubs (id, club_name, club_description, club_page_url, keywords) VALUES
('001', 'Coreographia', 'The official dance society', 'coreographia.html', 'dance, choreography, performance'),
('002', 'Aperture', 'The official photography club', 'aperture.html', 'photography, camera'),
('003', 'Anova', 'The official DSC/IT technical society', 'anova.html', 'Technical, DSC/IT, Innovation, coding'),
('004', 'Litmus', 'The official literary Arts society', 'litmus.html', 'Writing, Debating, Reading , MUN Society'),
('005', 'Acm', 'The official computing society', 'acm.html', 'tech, enthusiasts , teamwork , computing, technical, skills'),
('006', 'Biotech Club', 'The official biotech society', 'biotech.html', 'Biosciences, Biotech, sciences , Biology'),
('007', 'Cactus', 'The official Fashion society', 'cactus.html', 'Fashion, Social, CULTURAL , Individuality'),
('008', 'GDSC', 'The official Google Developer society', 'gdsc.html', 'Google, Developers, Technical , Technologies '),
('009', 'HumanofMUJ', 'The official Photoblog society', 'litmus.html', 'photoblog , Journaling, experiences , empowering '),
('010', 'GLITCH', 'The official eSports society', 'glitch.html', 'eSports, anime, VFX , gaming'),
('011', 'IEEE', 'The official Technical Society', 'ieee.html', 'Technical, Society, technology  , engineers '),
('012', 'TMC', 'The official Music Society', 'tmc.html', 'Music , Society , diverse  , musical '),
('013', 'Rotaract', 'The official environment society', 'rotaract.html', ' environment , socialservice, Green , service ');
