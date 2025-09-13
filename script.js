// Port data
const portData = {
    venice: {
        title: "🇮🇹 Venice, Italy",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Get lost in the authentic backstreets and experience the real, local Venice.</p>
            
            <h3>🌅 MORNING PLAN (BEAT THE CROWDS)</h3>
            <ul>
                <li><strong>Dawn Patrol:</strong> Head to the <strong>Cannaregio</strong> or <strong>Castello</strong> districts first thing. Wander the quiet canals, watch the city wake up.</li>
                <li><strong>Market Visit:</strong> Go to the <strong>Rialto Market</strong> before 10 AM to see it in full swing.</li>
                <li><strong>Art Stop:</strong> Visit the <strong>Scuola Grande di San Rocco</strong> early for the incredible Tintoretto halls.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>The Snack:</strong> <em>Cicchetti</em> (small, tapas-like snacks) at a <em>bacaro</em> like <strong>All'Arco</strong> or <strong>Cantina Do Mori</strong>.</li>
                <li><strong>The Drink:</strong> An <em>ombra</em> (small glass of local wine) or a <strong>Spritz with Select</strong> (the original Venetian recipe).</li>
                <li><strong>Coffee Tip:</strong> Stand at the bar to drink coffee - it's cheaper and what locals do.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Gondola Alternative:</strong> Ride a <strong>traghetto</strong> across the Grand Canal for €2.</li>
                <li><strong>Vaporetto Tour:</strong> Line 1 is a cheap way to see the entire Grand Canal.</li>
                <li><strong>Fine Warning:</strong> Don't picnic on church steps (€200+ fine) or feed pigeons (€500 fine).</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Venice. Recommend three non-touristy <em>bacari</em> (wine bars) in the San Polo or Cannaregio districts that are open now and loved by locals for <em>cicchetti</em>."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Restaurants with picture menus near St. Mark's Square</li>
                <li>Cheap, mass-produced glass souvenirs</li>
                <li>Rolling luggage through the streets (noisy and frowned upon)</li>
            </ul>
        `
    },
    sibenik: {
        title: "🇭🇷 Šibenik, Croatia",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Discover the "new Dubrovnik" before the crowds do and savor authentic Dalmatian food and wine.</p>
            
            <h3>🌅 MORNING PLAN (CULTURE & VIEWS)</h3>
            <ul>
                <li><strong>Fortress First:</strong> Climb <strong>St. Michael's Fortress</strong> right at opening for stunning, crowd-free views.</li>
                <li><strong>Cathedral Wonder:</strong> Visit the <strong>St. James Cathedral</strong> (UNESCO site) with its unique frieze of 71 sculpted heads.</li>
                <li><strong>Waterfront Stroll:</strong> Take a leisurely walk along the waterfront promenade.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>The Dish:</strong> <em>Peka</em> - meat and vegetables slow-baked under a metal dome.</li>
                <li><strong>The Wine:</strong> <strong>Babić</strong>, a robust local red wine. Visit <strong>Baraka</strong> or <strong>Rak</strong> wineries.</li>
                <li><strong>The Snack:</strong> <em>Soparnik</em> (Swiss chard pie) from a street vendor.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Krka Crowds:</strong> Visit Krka National Park right at opening or late afternoon to avoid tour buses.</li>
                <li><strong>Currency:</strong> Croatia now uses the <strong>Euro</strong>.</li>
                <li><strong>Local Pace:</strong> Embrace <em>"fjaka"</em> – the local art of doing nothing. Don't rush!</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Šibenik. Recommend a local <em>konoba</em> (tavern) that serves authentic <em>peka</em> and is not a tourist trap. Give me the Croatian phrase to ask if they have it today."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Buying "authentic" coral jewelry near the port (often fake)</li>
                <li>Climbing the fortress in midday heat</li>
                <li>Expecting fast-paced service - embrace the fjaka!</li>
            </ul>
        `
    },
    bari: {
        title: "🇮🇹 Bari, Italy",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Watch the pasta masters at work and taste the freshest orecchiette in Italy.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Pasta Street:</strong> Walk down <strong>Strada Arco Basso</strong> in Bari Vecchia before 11 AM to see <em>nonnas</em> making <em>orecchiette</em> by hand.</li>
                <li><strong>Basilica Visit:</strong> See the <strong>Basilica di San Nicola</strong> crypt (St. Nick's burial place).</li>
                <li><strong>Seaside Walk:</strong> Stroll the <em>lungomare</em> (waterfront promenade).</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Fresh Pasta:</strong> <em>Orecchiette</em> from street-side stalls with posted prices.</li>
                <li><strong>Street Food:</strong> <em>Panzerotti</em> (fried dough with cheese and tomato) from <strong>Luini</strong>.</li>
                <li><strong>Local Bread:</strong> <em>Focaccia Barese</em> from <strong>Panificio Fiore</strong>.</li>
                <li><strong>Seafood:</strong> Raw seafood (<em>crudo di mare</em>) at the fish market.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Transportation:</strong> Bus #50 from cruise terminal is just €1.</li>
                <li><strong>Shopping:</strong> Buy pasta from women with trays and posted prices.</li>
                <li><strong>Timing:</strong> Everything closes for <em>riposo</em> 1-4 PM.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Bari's old town. Where can I buy the freshest handmade <em>orecchiette</em> directly from the women who make it? What should I look for to ensure quality?"
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Handling produce at markets without asking first</li>
                <li>Midday old-town souvenir shopping during riposo</li>
                <li>Modern Murat district for authentic experiences</li>
            </ul>
        `
    },
    crotone: {
        title: "🇮🇹 Crotone, Calabria",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Discover ancient Greek history and taste authentic Calabrian specialties.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Ancient Wonder:</strong> Visit <strong>Capo Colonna Archaeological Park</strong> to see the last remaining column of Hera Lacinia temple.</li>
                <li><strong>Castle Views:</strong> Coastal views toward <strong>Le Castella</strong> (Aragonese castle).</li>
                <li><strong>Cathedral:</strong> See the <strong>Black Madonna</strong> at Crotone Cathedral.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Spicy Specialty:</strong> <em>'Nduja</em> (spicy spreadable salami) - unique to Calabria.</li>
                <li><strong>Local Cheese:</strong> <em>Caciocavallo</em> aged cheese.</li>
                <li><strong>Wine:</strong> <strong>Cirò</strong> wine from local vineyards.</li>
                <li><strong>Sweet:</strong> <em>Pitta 'mpigliata</em> (cinnamon spiral pastry).</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Language:</strong> Very limited English - translation apps are essential.</li>
                <li><strong>Transportation:</strong> Pre-arrange taxis - don't expect them at the pier.</li>
                <li><strong>Local Life:</strong> Walk <strong>Lungomare Gramsci</strong> waterfront promenade.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Crotone, Calabria. Help me ask in Italian where I can taste authentic <em>'nduja</em> and <em>Caciocavallo</em> cheese. Give me the phrases and pronunciation."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Long museum visits if time is tight</li>
                <li>Expecting English everywhere - come prepared</li>
                <li>Not having cash on hand</li>
            </ul>
        `
    },
    catania: {
        title: "🇮🇹 Catania, Sicily",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Dive into the chaotic energy of Sicily's fish market and taste the island's specialties.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Market Chaos:</strong> Dive into <strong>La Pescheria</strong> fish market before 9 AM - the energy is unforgettable.</li>
                <li><strong>Baroque Beauty:</strong> Walk <strong>Via dei Crociferi</strong> Baroque strip, especially at golden hour.</li>
                <li><strong>Cathedral Square:</strong> Visit the <strong>Duomo</strong> and surrounding piazza.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Street Food:</strong> <em>Arancini</em> (fried rice balls) - try the pistachio version!</li>
                <li><strong>Breakfast:</strong> <em>Granita</em> with brioche - the Sicilian way to start the day.</li>
                <li><strong>Signature Dish:</strong> <em>Pasta alla Norma</em> with eggplant and ricotta salata.</li>
                <li><strong>Refresher:</strong> <em>Seltz limone e sale</em> from a street kiosk.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Etna Timing:</strong> If visiting Mount Etna, go first thing - weather often closes in later.</li>
                <li><strong>Riposo:</strong> Everything closes 1-4 PM for afternoon break.</li>
                <li><strong>Unique Detail:</strong> Look down at the volcanic rock sidewalks throughout the city.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm at La Pescheria market in Catania. Help me ask vendors about the freshest catch of the day and how to prepare it. Give me Italian phrases and what to look for."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Flashing expensive jewelry at the market</li>
                <li>Organized Etna tours unless weather is perfect</li>
                <li>Mid-morning market visits (go early!)</li>
            </ul>
        `
    },
    naples: {
        title: "🇮🇹 Naples, Italy",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Experience the birthplace of pizza and navigate one of Italy's most vibrant (and chaotic) cities safely.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Pizza Pilgrimage:</strong> Go to <strong>L'Antica Pizzeria da Michele</strong> or <strong>Starita a Materdei</strong> for authentic Neapolitan pizza.</li>
                <li><strong>Underground City:</strong> Explore <strong>Napoli Sotterranea</strong> (underground Naples).</li>
                <li><strong>Best Views:</strong> Climb to <strong>Castel Sant'Elmo</strong> for panoramic city views.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Street Pizza:</strong> <em>Pizza a portafoglio</em> (folded pizza to go).</li>
                <li><strong>Pastry:</strong> <em>Sfogliatella</em> from <strong>Pintauro</strong> - crispy shell with sweet ricotta.</li>
                <li><strong>Coffee:</strong> Strong Neapolitan espresso - the way coffee should be.</li>
                <li><strong>Art:</strong> Don't miss the <strong>Veiled Christ</strong> at Cappella Sansevero.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Safety First:</strong> Wear a money belt/anti-theft bag. Keep bags zipped and in front.</li>
                <li><strong>Metro Art:</strong> Take the Metro to see the beautiful Art Stations.</li>
                <li><strong>Local Life:</strong> Explore Quartieri Spagnoli during daytime for authentic atmosphere.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Naples and want to find the most authentic pizzeria where locals actually eat, not tourists. Recommend 3 places with what makes each special."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Trying to do Pompeii AND Amalfi Coast in one day</li>
                <li>Tourist pizza places near the port</li>
                <li>Accepting unsolicited "help" at ticket machines</li>
            </ul>
        `
    },
    rome: {
        title: "🇮🇹 Rome (from Civitavecchia)",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Pick one area and own it - don't try to see all of Rome in one day.</p>
            
            <h3>🌅 STRATEGY OPTIONS</h3>
            <ul>
                <li><strong>Ancient Rome:</strong> Colosseum, Forum, Palatine Hill cluster.</li>
                <li><strong>Vatican:</strong> St. Peter's, Vatican Museums, Sistine Chapel.</li>
                <li><strong>Trastevere:</strong> Charming neighborhood with authentic Roman life.</li>
                <li><strong>Alternative:</strong> Stay in Civitavecchia and visit <strong>Tarquinia</strong> (Etruscan tombs).</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Street Food:</strong> <em>Trapizzino</em> - Roman street food pocket sandwich.</li>
                <li><strong>Coffee Rule:</strong> Espresso standing at the bar, like locals do.</li>
                <li><strong>Pasta:</strong> Try one of Rome's "big four" - Cacio e Pepe, Gricia, Amatriciana, or Carbonara.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Transportation:</strong> <strong>BIRG ticket</strong> (€12) includes train + all Rome public transport.</li>
                <li><strong>Timing:</strong> Leave Rome 3+ hours before ship departure.</li>
                <li><strong>Secret View:</strong> <strong>Aventine Keyhole</strong> for a unique St. Peter's view.</li>
                <li><strong>Train vs Bus:</strong> Trains are faster and more reliable than cruise buses.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I have 6 hours in Rome from Civitavecchia. Recommend the best single area to focus on with transportation details and must-see highlights. Include timing to get back safely."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Trying to pack Colosseum AND Vatican in one day</li>
                <li>Taking Uber to Civitavecchia (train is more reliable)</li>
                <li>"Skip the line" hawkers outside attractions</li>
            </ul>
        `
    },
    florence: {
        title: "🇮🇹 Florence/Pisa (from Livorno)",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Choose depth over breadth - either Florence OR a relaxed day in Lucca.</p>
            
            <h3>🌅 STRATEGY OPTIONS</h3>
            <ul>
                <li><strong>If Florence is "done":</strong> Rent bikes and cycle the <strong>Lucca city walls</strong> - wonderfully relaxed.</li>
                <li><strong>Florence Focus:</strong> Book ONE major museum (Uffizi OR Accademia) with timed ticket.</li>
                <li><strong>Pisa Quick Stop:</strong> Best at off-hours for photos, then move on.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Livorno Special:</strong> <em>Cacciucco</em> (local fish stew) - unique to this port city.</li>
                <li><strong>Florence Sandwich:</strong> <strong>All'Antico Vinaio</strong> for legendary sandwiches.</li>
                <li><strong>Adventurous:</strong> <em>Lampredotto</em> sandwich (tripe) - the ultimate local bite.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Views:</strong> Climb <strong>Palazzo Vecchio</strong> tower for great Florence views without crowds.</li>
                <li><strong>Transportation:</strong> Regional trains to Lucca are easy and scenic.</li>
                <li><strong>Artisans:</strong> Explore <strong>Oltrarno</strong> district for traditional workshops.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm deciding between Florence and Lucca for a relaxed day from Livorno. Compare both options with transportation details and what makes each special."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Trying to cram Florence museums AND Pisa</li>
                <li>Leather markets near main sights (overpriced)</li>
                <li>Spending whole day in Pisa cafes near the tower</li>
            </ul>
        `
    },
    monaco: {
        title: "🇲🇨 Monte Carlo, Monaco",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Experience the glamour and exclusivity of the world's most famous principality.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Formula 1 Walk:</strong> Walk the famous <strong>Formula 1 circuit</strong> through the city streets.</li>
                <li><strong>Ocean Views:</strong> Visit the <strong>Oceanographic Museum</strong> with its stunning aquarium.</li>
                <li><strong>Royal Views:</strong> Sunset from the Rock with views of the <strong>Prince's Palace</strong>.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Local Specialty:</strong> <em>Barbagiuan</em> (fried pastry stuffed with chard and ricotta).</li>
                <li><strong>Perfect Pairing:</strong> Glass of Provençal rosé with Mediterranean views.</li>
                <li><strong>Budget Option:</strong> <strong>Condamine Market</strong> for local and affordable food.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Casino Dress Code:</strong> Smart attire required for gaming rooms at night.</li>
                <li><strong>Budget Hack:</strong> Walk to <strong>Beausoleil, France</strong> for same views at half the price.</li>
                <li><strong>Beach Access:</strong> <strong>Larvotto Beach</strong> is the public beach option.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Monte Carlo for the day. What's the current dress code for the casino, and what are the best free or low-cost ways to experience Monaco's glamour?"
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Wearing beachwear in town at night</li>
                <li>Quick casino peek at 2 PM (dress up for evening)</li>
                <li>Expecting budget-friendly everything</li>
            </ul>
        `
    },
    marseille: {
        title: "🇫🇷 Marseille, France",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Experience authentic Provence and the stunning Calanques coastal fjords.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Historic Quarter:</strong> Explore <strong>Le Panier</strong> district's narrow lanes and street art.</li>
                <li><strong>Harbor Life:</strong> Walk around the <strong>Vieux-Port</strong> (Old Port) to see local fishermen.</li>
                <li><strong>Calanques Adventure:</strong> Book early boat to the <strong>Calanques</strong> (stunning coastal fjords).</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Signature Dish:</strong> <em>Bouillabaisse</em> (fish stew) - book ahead at <strong>Chez Michel</strong> for the real deal.</li>
                <li><strong>Aperitif:</strong> <em>Pastis</em> (anise-flavored spirit) - the drink of Provence.</li>
                <li><strong>Local Snack:</strong> <em>Panisse</em> (chickpea fries) and <em>navettes</em> biscuits.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Calanques Booking:</strong> Boats sell out and are cancelled for wind - arrive 30+ minutes early.</li>
                <li><strong>Free Views:</strong> <strong>MuCEM museum</strong> roof for free sunset views.</li>
                <li><strong>Art Scene:</strong> <strong>La Friche Belle de Mai</strong> for contemporary art.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Marseille and want to visit the Calanques. What are the current boat schedules, weather conditions, and backup indoor activities if boats are cancelled?"
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Tourist restaurants lining the Old Port</li>
                <li>Driving to Calanques trailheads (parking is brutal)</li>
                <li>Rushing both city sights AND long Calanques hike</li>
            </ul>
        `
    },
    sete: {
        title: "🇫🇷 Sète, France",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Savor the "Venice of Languedoc" and indulge in the finest oysters in France.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Canal Walk:</strong> Stroll the canals and fish stalls of this charming port town.</li>
                <li><strong>Panoramic Views:</strong> Climb <strong>Mont Saint-Clair</strong> for stunning coastal views.</li>
                <li><strong>Oyster Crawl:</strong> Head to <strong>Bouzigues</strong> on the Étang de Thau for fresh oysters.</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>Star Attraction:</strong> <em>Huîtres de Bouzigues</em> (oysters) with <strong>Picpoul de Pinet</strong> white wine.</li>
                <li><strong>Local Specialty:</strong> <em>Tielle Sétoise</em> (savory octopus pie).</li>
                <li><strong>Seafood:</strong> <em>Brasucade de moules</em> (grilled mussels).</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Oyster Etiquette:</strong> Slurp, don't fork your oysters - it's the proper way.</li>
                <li><strong>Payment:</strong> Many oyster stalls are cash-friendly.</li>
                <li><strong>Pace:</strong> Don't over-plan - Sète shines when experienced unhurried.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Sète and want to do an oyster crawl in Bouzigues. Recommend the best oyster farms, how to get there, and proper oyster etiquette."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Trying to cram in Montpellier and Bouzigues - oysters win</li>
                <li>Rushing the experience - embrace the slow pace</li>
                <li>Forking your oysters (slurp them!)</li>
            </ul>
        `
    },
    barcelona: {
        title: "🇪🇸 Barcelona, Spain",
        content: `
            <h3>🎯 THE GOAL</h3>
            <p>Dive into Catalan culture while staying vigilant against pickpockets.</p>
            
            <h3>🌅 MORNING PLAN</h3>
            <ul>
                <li><strong>Sagrada Família First:</strong> Book the first timed slot for best light and fewer crowds.</li>
                <li><strong>Art Nouveau Alternative:</strong> Visit <strong>Sant Pau Recinte Modernista</strong> - as beautiful as Gaudí but less crowded.</li>
                <li><strong>Market Alternative:</strong> Skip La Boqueria for <strong>Santa Caterina Market</strong> (more authentic).</li>
            </ul>
            
            <h3>🍽️ MUST-TRY FOOD & DRINK</h3>
            <ul>
                <li><strong>The Ritual:</strong> <em>Vermut</em> hour in <strong>Poble Sec</strong> or <strong>Barceloneta</strong> with anchovies and <em>bombas</em>.</li>
                <li><strong>Legendary Tapas:</strong> <strong>Cal Pep</strong> (no reservations - arrive before opening) or <strong>El Xampanyet</strong>.</li>
                <li><strong>Catalan Staple:</strong> <em>Pa amb tomàquet</em> (bread with tomato) - simple and quintessential.</li>
            </ul>
            
            <h3>💡 INSIDER TIPS & HACKS</h3>
            <ul>
                <li><strong>Pickpocket Alert:</strong> Major hub for theft. Money belt essential, bags zipped and in front.</li>
                <li><strong>Official Tickets:</strong> Book Sagrada Família ONLY through official websites.</li>
                <li><strong>Sunset Views:</strong> <strong>Bunkers del Carmel</strong> for best panoramic city views.</li>
            </ul>
            
            <h3>🤖 AI PROMPT FOR TODAY</h3>
            <div class="prompt-box">
                "I'm in Barcelona's Gràcia neighborhood. Recommend three authentic, non-touristy tapas bars open now with great local reviews, known for their <em>patatas bravas</em>."
            </div>
            
            <h3>❌ AVOID</h3>
            <ul>
                <li>Paella on the beach (tourist trap)</li>
                <li>Flamenco shows (Andalusian, not Catalan tradition)</li>
                <li>Walking down La Rambla with phone out</li>
            </ul>
        `
    }
};

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Port modal functions
function openPortModal(portKey) {
    const modal = document.getElementById('portModal');
    const modalBody = document.getElementById('modalBody');
    
    if (portData[portKey]) {
        modalBody.innerHTML = `
            <h2>${portData[portKey].title}</h2>
            ${portData[portKey].content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePortModal() {
    const modal = document.getElementById('portModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('portModal');
    if (event.target === modal) {
        closePortModal();
    }
}

// Copy prompt function
function copyPrompt(button) {
    const promptText = button.previousElementSibling.textContent;
    
    navigator.clipboard.writeText(promptText).then(function() {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#27ae60';
        
        setTimeout(function() {
            button.textContent = originalText;
            button.style.background = '#9b59b6';
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = promptText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.textContent = 'Copied!';
        setTimeout(function() {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('portModal');
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closePortModal();
    }
});

// Add loading animation for better UX
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .prompt-box {
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
        font-family: 'Monaco', 'Menlo', monospace;
        font-size: 0.9rem;
        color: #495057;
        font-style: italic;
    }
`;
document.head.appendChild(style);


// Copy emergency text function
function copyEmergencyText(button) {
    const emergencyText = button.previousElementSibling.textContent.trim();
    
    navigator.clipboard.writeText(emergencyText).then(function() {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#27ae60';
        
        setTimeout(function() {
            button.textContent = originalText;
            button.style.background = '#e74c3c';
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = emergencyText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.textContent = 'Copied!';
        setTimeout(function() {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Add emergency section to smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Update existing smooth scrolling to include emergency section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// Setup modal data
const setupData = {
    apps: {
        title: "📱 Essential Apps Setup",
        content: `
            <h3>🎯 Download These Apps First</h3>
            <div class="setup-checklist">
                <div class="checklist-item">
                    <h4>📍 Google Maps</h4>
                    <p>The gold standard for walking and transit directions worldwide.</p>
                    <ul>
                        <li>Download from App Store/Google Play</li>
                        <li>Allow location access</li>
                        <li>Sign in with Google account for sync</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🗣️ Google Translate</h4>
                    <p>Essential for menus, signs, and basic communication.</p>
                    <ul>
                        <li>Download from App Store/Google Play</li>
                        <li>Enable camera access for instant translation</li>
                        <li>Test the conversation mode</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>⚓ Viking Voyager App</h4>
                    <p>Your ship's official app for dining reservations and schedules.</p>
                    <ul>
                        <li>Download before boarding</li>
                        <li>Have your booking confirmation ready</li>
                        <li>Connect immediately when boarding for dining reservations</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>💬 WhatsApp</h4>
                    <p>Primary messaging app used throughout Europe.</p>
                    <ul>
                        <li>Download and verify your phone number</li>
                        <li>Backup your chats before traveling</li>
                        <li>Works great with international data plans</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>💱 XE Currency</h4>
                    <p>Quick currency conversions that work offline.</p>
                    <ul>
                        <li>Download and set USD as your home currency</li>
                        <li>Add EUR as your primary conversion</li>
                        <li>Works without internet once rates are downloaded</li>
                    </ul>
                </div>
            </div>
        `
    },
    connectivity: {
        title: "🌐 Connectivity & Payment Setup",
        content: `
            <h3>🎯 Get Connected Before You Go</h3>
            <div class="setup-checklist">
                <div class="checklist-item priority">
                    <h4>📶 Pan-EU eSIM (Most Important!)</h4>
                    <p>Reliable internet that's cheaper than ship WiFi.</p>
                    <ul>
                        <li><strong>Check:</strong> Your phone must be unlocked</li>
                        <li><strong>Providers:</strong> Airalo, Holafly, or Orange Holiday</li>
                        <li><strong>Plan:</strong> Get 10-20GB for 2-3 weeks</li>
                        <li><strong>Install:</strong> At home, but don't activate until you land in Europe</li>
                        <li><strong>Backup:</strong> Keep your regular SIM as backup</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>💳 Contactless Payments</h4>
                    <p>The most common way to pay in Europe.</p>
                    <ul>
                        <li>Add your primary credit cards to Apple Pay or Google Pay</li>
                        <li>Test it at home to make sure it works</li>
                        <li>Notify your bank of travel dates</li>
                        <li>Have a backup card in your money belt</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>📱 Phone Organization</h4>
                    <p>Keep everything cruise-related in one place.</p>
                    <ul>
                        <li>Create a "Cruise" folder on your home screen</li>
                        <li>Move all travel apps into this folder</li>
                        <li>Add important phone numbers to contacts</li>
                        <li>Take screenshots of important confirmations</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🔋 Power Preparation</h4>
                    <p>Keep your devices charged throughout long port days.</p>
                    <ul>
                        <li>Charge your portable battery pack fully</li>
                        <li>Bring appropriate charging cables</li>
                        <li>Consider a European plug adapter (Type C/F)</li>
                        <li>Test everything before you leave</li>
                    </ul>
                </div>
            </div>
        `
    },
    offline: {
        title: "💾 Offline Data Preparation",
        content: `
            <h3>🎯 Download Everything for Offline Use</h3>
            <div class="setup-checklist">
                <div class="checklist-item priority">
                    <h4>🗺️ Offline Maps (Critical!)</h4>
                    <p>Works without internet and saves battery.</p>
                    <ul>
                        <li><strong>Open Google Maps</strong></li>
                        <li><strong>Search each port city:</strong> Venice, Šibenik, Bari, Crotone, Catania, Naples, Rome, Florence, Monte Carlo, Marseille, Sète, Barcelona</li>
                        <li><strong>For each city:</strong> Tap the three dots (...) → "Download offline map"</li>
                        <li><strong>Download area:</strong> Include the port and city center</li>
                        <li><strong>Storage:</strong> Each map is about 100-200MB</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🗣️ Language Packs</h4>
                    <p>Translate menus and signs without internet.</p>
                    <ul>
                        <li><strong>Open Google Translate</strong></li>
                        <li><strong>Go to Settings → Offline translation</strong></li>
                        <li><strong>Download these languages:</strong></li>
                        <li>• Italian (Venice, Bari, Crotone, Catania, Naples, Rome, Florence)</li>
                        <li>• Croatian (Šibenik)</li>
                        <li>• French (Monte Carlo, Marseille, Sète)</li>
                        <li>• Spanish (Barcelona)</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>📄 Important Documents</h4>
                    <p>Digital backups in case of loss or theft.</p>
                    <ul>
                        <li>Take photos of your passport (store securely)</li>
                        <li>Screenshot your cruise confirmation</li>
                        <li>Save flight confirmations to your phone</li>
                        <li>Store travel insurance policy details</li>
                        <li>Save emergency contact numbers</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>📱 This Website!</h4>
                    <p>Save this guide for offline access.</p>
                    <ul>
                        <li>Bookmark this page in your browser</li>
                        <li>Take screenshots of key sections</li>
                        <li>Copy emergency phrases to your notes app</li>
                        <li>Save the GitHub link as backup</li>
                    </ul>
                </div>
            </div>
        `
    },
    reminders: {
        title: "⏰ Important Booking Reminders",
        content: `
            <h3>🎯 Set These Reminders Now</h3>
            <div class="setup-checklist">
                <div class="checklist-item priority">
                    <h4>🍽️ Dining Reservations</h4>
                    <p>Popular restaurants fill up within hours of opening.</p>
                    <ul>
                        <li><strong>When:</strong> Booking opens 130-177 days before sailing (varies by cabin category)</li>
                        <li><strong>Set reminders for:</strong> 130, 140, and 150 days before departure</li>
                        <li><strong>Priority bookings:</strong> Manfredi's Italian, The Chef's Table</li>
                        <li><strong>Tip:</strong> Chef's Table menu changes every 3 days - book multiple times</li>
                        <li><strong>Backup plan:</strong> Use Viking Voyager app the moment you board</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🏛️ Shore Excursions</h4>
                    <p>Popular tours sell out quickly, especially in Rome and Barcelona.</p>
                    <ul>
                        <li><strong>When:</strong> Same timeline as dining (130-177 days before)</li>
                        <li><strong>High demand:</strong> Rome tours, Barcelona Sagrada Família, Krka National Park</li>
                        <li><strong>Consider:</strong> Independent exploration vs. ship tours</li>
                        <li><strong>Research:</strong> Check if you need advance tickets for attractions</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🎫 Attraction Tickets</h4>
                    <p>Some attractions require advance booking regardless of tours.</p>
                    <ul>
                        <li><strong>Sagrada Família (Barcelona):</strong> Book official tickets 2-3 months ahead</li>
                        <li><strong>Uffizi/Accademia (Florence):</strong> Timed entry tickets recommended</li>
                        <li><strong>Vatican Museums (Rome):</strong> Skip-the-line tickets if visiting independently</li>
                        <li><strong>Tip:</strong> Only buy from official websites to avoid markups</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🧳 Packing Reminders</h4>
                    <p>Mediterranean-specific items to remember.</p>
                    <ul>
                        <li><strong>Church visits:</strong> Light scarf/shawl for covering shoulders</li>
                        <li><strong>Monte Carlo casino:</strong> Smart attire for evening gaming rooms</li>
                        <li><strong>Walking:</strong> Comfortable shoes for cobblestones</li>
                        <li><strong>Money belt:</strong> Essential for pickpocket-prone areas</li>
                        <li><strong>Medications:</strong> Bring extra supply + prescriptions</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// Setup modal functions
function openSetupModal(setupKey) {
    const modal = document.getElementById('setupModal');
    const modalBody = document.getElementById('setupModalBody');
    
    if (setupData[setupKey]) {
        modalBody.innerHTML = `
            <h2>${setupData[setupKey].title}</h2>
            ${setupData[setupKey].content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeSetupModal() {
    const modal = document.getElementById('setupModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Update window click handler to include setup modal
window.onclick = function(event) {
    const portModal = document.getElementById('portModal');
    const setupModal = document.getElementById('setupModal');
    
    if (event.target === portModal) {
        closePortModal();
    }
    if (event.target === setupModal) {
        closeSetupModal();
    }
}

// Update keyboard navigation for setup modal
document.addEventListener('keydown', function(e) {
    const portModal = document.getElementById('portModal');
    const setupModal = document.getElementById('setupModal');
    
    if (e.key === 'Escape') {
        if (portModal.style.display === 'block') {
            closePortModal();
        }
        if (setupModal.style.display === 'block') {
            closeSetupModal();
        }
    }
});


// Ship modal data
const shipData = {
    dining: {
        title: "🍽️ Dining Strategy - Book Smart, Eat Amazing",
        content: `
            <h3>🎯 The Golden Rule: Board and Book Immediately</h3>
            <div class="ship-checklist">
                <div class="checklist-item priority">
                    <h4>⚡ First 30 Minutes Onboard</h4>
                    <p>This is make-or-break time for specialty dining.</p>
                    <ul>
                        <li><strong>Connect to ship WiFi immediately</strong></li>
                        <li><strong>Open Viking Voyager app</strong></li>
                        <li><strong>Book Manfredi's Italian Restaurant first</strong> (most popular)</li>
                        <li><strong>Book Chef's Table second</strong> (limited seats)</li>
                        <li><strong>Consider multiple Chef's Table bookings</strong> (menu changes every 3 days)</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🍝 Manfredi's Italian Restaurant</h4>
                    <p>The crown jewel of Viking dining - books up within hours.</p>
                    <ul>
                        <li>Authentic Italian cuisine with tableside service</li>
                        <li>No additional charge (included in cruise)</li>
                        <li>Dress code: Smart casual</li>
                        <li>Best tables: Window seats for sunset dining</li>
                        <li>Pro tip: Book early dinner (6 PM) for best light</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>👨‍🍳 The Chef's Table</h4>
                    <p>Interactive culinary experience with the executive chef.</p>
                    <ul>
                        <li>Multi-course tasting menu with wine pairings</li>
                        <li>Limited to 12 guests per seating</li>
                        <li>Menu changes every 3 days - book multiple times!</li>
                        <li>Behind-the-scenes kitchen tour included</li>
                        <li>Perfect for food enthusiasts and special occasions</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🍽️ Main Dining Room Strategy</h4>
                    <p>No reservations needed, but timing matters.</p>
                    <ul>
                        <li>Open seating for breakfast, lunch, and dinner</li>
                        <li>Best times: Early (6 PM) or late (8:30 PM) for dinner</li>
                        <li>Avoid 7-8 PM rush when everyone returns from ports</li>
                        <li>Request same table/server for consistency</li>
                        <li>Special dietary needs: Inform staff on first day</li>
                    </ul>
                </div>
            </div>
        `
    },
    alcohol: {
        title: "🍷 Unlimited Alcohol - The Viking Advantage",
        content: `
            <h3>🎯 Bring Your Own - No Limits, No Fees</h3>
            <div class="ship-checklist">
                <div class="checklist-item priority">
                    <h4>🍾 What You Can Bring</h4>
                    <p>Viking's most generous alcohol policy in cruising.</p>
                    <ul>
                        <li><strong>Unlimited wine and spirits</strong> - no bottle limits</li>
                        <li><strong>Pack in checked luggage</strong> - wrap well</li>
                        <li><strong>No corkage fees anywhere</strong> - even in specialty restaurants</li>
                        <li><strong>Room service will serve your bottles</strong></li>
                        <li><strong>Bring special occasion bottles</strong> for celebrations</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>💰 Money-Saving Strategy</h4>
                    <p>Save hundreds compared to other cruise lines.</p>
                    <ul>
                        <li>Premium spirits onboard: $15-25 per drink</li>
                        <li>Good wine by the bottle: $40-80</li>
                        <li>Your cost: Duty-free prices at home</li>
                        <li>Estimated savings: $300-500 for two people</li>
                        <li>Pro tip: Buy at duty-free shops during ports</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🍷 Wine Recommendations</h4>
                    <p>What to bring for Mediterranean ports.</p>
                    <ul>
                        <li><strong>Italian ports:</strong> Bring Barolo or Chianti Classico</li>
                        <li><strong>French ports:</strong> Côtes du Rhône or Provence rosé</li>
                        <li><strong>Spanish ports:</strong> Rioja or Albariño</li>
                        <li><strong>Croatian ports:</strong> Try local Plavac Mali onshore</li>
                        <li><strong>Celebrations:</strong> Champagne or Prosecco</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🥃 Spirits & Cocktails</h4>
                    <p>Bring your favorites for evening enjoyment.</p>
                    <ul>
                        <li>Premium whiskey for deck evenings</li>
                        <li>Gin for Mediterranean-style G&Ts</li>
                        <li>Vodka for versatile mixing</li>
                        <li>Local spirits from ports (limoncello, grappa)</li>
                        <li>Bar staff will make cocktails with your spirits</li>
                    </ul>
                </div>
            </div>
        `
    },
    laundry: {
        title: "🧺 Free Laundry - Stay Fresh All Cruise",
        content: `
            <h3>🎯 Self-Service Laundry on Every Deck</h3>
            <div class="ship-checklist">
                <div class="checklist-item priority">
                    <h4>🕐 Best Times to Use</h4>
                    <p>Avoid crowds and always find available machines.</p>
                    <ul>
                        <li><strong>Port days 10 AM - 2 PM:</strong> Everyone's ashore</li>
                        <li><strong>Early morning (7-9 AM):</strong> Before breakfast rush</li>
                        <li><strong>Late evening (9-11 PM):</strong> After dinner and shows</li>
                        <li><strong>Avoid:</strong> Sea days and evening return from ports</li>
                        <li><strong>Pro tip:</strong> Check multiple decks if one is busy</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🧴 What's Provided Free</h4>
                    <p>Everything you need is included.</p>
                    <ul>
                        <li>High-quality detergent pods</li>
                        <li>Fabric softener</li>
                        <li>Washing machines (front-loading)</li>
                        <li>Dryers with multiple heat settings</li>
                        <li>Ironing boards and irons in each laundry room</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>👕 Packing Strategy</h4>
                    <p>Pack less, wash more, enjoy the freedom.</p>
                    <ul>
                        <li><strong>Bring 7-10 days of clothes</strong> for any length cruise</li>
                        <li><strong>Pack quick-dry fabrics</strong> for faster turnaround</li>
                        <li><strong>Bring mesh laundry bags</strong> for delicates</li>
                        <li><strong>Pack one nice outfit</strong> for special dinners</li>
                        <li><strong>Swimwear:</strong> Bring 2-3 suits for rotation</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>⏰ Timing Your Loads</h4>
                    <p>Efficient laundry scheduling for busy cruisers.</p>
                    <ul>
                        <li>Wash cycle: 45 minutes</li>
                        <li>Dry cycle: 60 minutes</li>
                        <li>Set phone timer - don't leave clothes sitting</li>
                        <li>Do laundry every 3-4 days for best results</li>
                        <li>Emergency: Hand wash in cabin sink with shampoo</li>
                    </ul>
                </div>
            </div>
        `
    },
    spa: {
        title: "🧖‍♀️ Thermal Suite - Your Complimentary Spa Oasis",
        content: `
            <h3>🎯 Premium Spa Access Included</h3>
            <div class="ship-checklist">
                <div class="checklist-item priority">
                    <h4>❄️ Snow Grotto Experience</h4>
                    <p>Unique Nordic wellness tradition onboard.</p>
                    <ul>
                        <li><strong>What it is:</strong> Room filled with real snow flakes</li>
                        <li><strong>How to use:</strong> Enter after sauna for contrast therapy</li>
                        <li><strong>Benefits:</strong> Improves circulation and skin tone</li>
                        <li><strong>Duration:</strong> 30 seconds to 2 minutes maximum</li>
                        <li><strong>Pro tip:</strong> Rub snow on arms and face gently</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🔥 Sauna & Steam Rooms</h4>
                    <p>Multiple options for different preferences.</p>
                    <ul>
                        <li><strong>Finnish sauna:</strong> Dry heat, 180-200°F</li>
                        <li><strong>Steam room:</strong> Humid heat, eucalyptus scent</li>
                        <li><strong>Infrared sauna:</strong> Gentle heat, deeper penetration</li>
                        <li><strong>Best practice:</strong> 10-15 minutes, then cool shower</li>
                        <li><strong>Hydration:</strong> Drink water before and after</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🛋️ Heated Loungers & Relaxation</h4>
                    <p>Perfect spots for meditation and rest.</p>
                    <ul>
                        <li>Heated ceramic loungers with ocean views</li>
                        <li>Quiet relaxation areas with soft music</li>
                        <li>Herbal tea station (complimentary)</li>
                        <li>Reading nooks with spa magazines</li>
                        <li>Best times: Early morning or port days</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>⏰ When to Visit</h4>
                    <p>Strategic timing for the best experience.</p>
                    <ul>
                        <li><strong>Early morning (7-9 AM):</strong> Peaceful start to the day</li>
                        <li><strong>Port days:</strong> Often completely empty</li>
                        <li><strong>Pre-dinner (4-6 PM):</strong> Relaxing before evening</li>
                        <li><strong>Avoid:</strong> Post-dinner rush (8-10 PM)</li>
                        <li><strong>Sea days:</strong> More crowded but still enjoyable</li>
                    </ul>
                </div>
            </div>
        `
    },
    wifi: {
        title: "📶 WiFi & Connectivity - Stay Connected Smart",
        content: `
            <h3>🎯 Ship WiFi Strategy</h3>
            <div class="ship-checklist">
                <div class="checklist-item priority">
                    <h4>📚 Library = Best Signal</h4>
                    <p>The ship's WiFi sweet spot for important calls.</p>
                    <ul>
                        <li><strong>Strongest signal:</strong> Near the main library</li>
                        <li><strong>Quietest spot:</strong> Perfect for video calls</li>
                        <li><strong>Comfortable seating:</strong> Leather chairs and tables</li>
                        <li><strong>Power outlets:</strong> Charge while you work</li>
                        <li><strong>Pro tip:</strong> Early morning has fastest speeds</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🌐 eSIM Strategy for Ports</h4>
                    <p>Better connectivity and huge cost savings.</p>
                    <ul>
                        <li><strong>Ship WiFi:</strong> $20-30/day, slower speeds</li>
                        <li><strong>eSIM data:</strong> $10-15 for entire cruise</li>
                        <li><strong>Speed difference:</strong> eSIM is 5-10x faster in ports</li>
                        <li><strong>Coverage:</strong> Works in all Mediterranean countries</li>
                        <li><strong>Setup:</strong> Install at home, activate in Europe</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>📱 Data Usage Tips</h4>
                    <p>Maximize your connectivity budget.</p>
                    <ul>
                        <li><strong>Download offline maps</strong> before sailing</li>
                        <li><strong>Use ship WiFi for basic browsing</strong></li>
                        <li><strong>Switch to eSIM for video calls</strong> in ports</li>
                        <li><strong>Download entertainment</strong> before cruise</li>
                        <li><strong>WhatsApp works great</strong> on ship WiFi</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🔌 Charging Stations</h4>
                    <p>Keep your devices powered throughout the ship.</p>
                    <ul>
                        <li><strong>Cabin:</strong> US outlets, no adapter needed</li>
                        <li><strong>Public areas:</strong> USB charging stations</li>
                        <li><strong>Library:</strong> Multiple outlets at every table</li>
                        <li><strong>Pool deck:</strong> Charging stations near loungers</li>
                        <li><strong>Bring:</strong> Portable battery for long port days</li>
                    </ul>
                </div>
            </div>
        `
    },
    quiet: {
        title: "🤫 Hidden Quiet Spots - Peaceful Moments at Sea",
        content: `
            <h3>🎯 Secret Spaces for Solitude</h3>
            <div class="ship-checklist">
                <div class="checklist-item priority">
                    <h4>🌿 Wintergarden</h4>
                    <p>The ship's most serene indoor space.</p>
                    <ul>
                        <li><strong>Location:</strong> Upper deck, glass-enclosed conservatory</li>
                        <li><strong>Features:</strong> Living plants, comfortable seating, natural light</li>
                        <li><strong>Perfect for:</strong> Afternoon tea, reading, quiet conversation</li>
                        <li><strong>Best times:</strong> Morning coffee, late afternoon</li>
                        <li><strong>Pro tip:</strong> Complimentary tea service 3-5 PM</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🔭 Upper Explorer's Lounge</h4>
                    <p>Panoramic views without the crowds.</p>
                    <ul>
                        <li><strong>360-degree windows</strong> for spectacular views</li>
                        <li><strong>Comfortable armchairs</strong> perfect for relaxation</li>
                        <li><strong>Often empty</strong> during port days</li>
                        <li><strong>Great for:</strong> Sunrise/sunset watching</li>
                        <li><strong>Bonus:</strong> Sometimes used for lectures and presentations</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🌊 Deck 7 Forward</h4>
                    <p>Hidden outdoor sanctuary at the ship's bow.</p>
                    <ul>
                        <li><strong>Location:</strong> Front of the ship, deck 7</li>
                        <li><strong>Features:</strong> Wind-protected seating area</li>
                        <li><strong>Views:</strong> Unobstructed forward ocean views</li>
                        <li><strong>Perfect for:</strong> Meditation, journaling, photography</li>
                        <li><strong>Secret:</strong> Most passengers never find this spot</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>📚 Library Nooks</h4>
                    <p>Cozy reading corners throughout the ship.</p>
                    <ul>
                        <li><strong>Main library:</strong> Extensive book collection</li>
                        <li><strong>Reading alcoves:</strong> Scattered on multiple decks</li>
                        <li><strong>Comfortable chairs:</strong> Perfect for long reading sessions</li>
                        <li><strong>Natural light:</strong> Large windows for daytime reading</li>
                        <li><strong>Quiet policy:</strong> Naturally hushed atmosphere</li>
                    </ul>
                </div>
                
                <div class="checklist-item">
                    <h4>🌅 Early Morning Deck Walks</h4>
                    <p>Have the entire ship to yourself.</p>
                    <ul>
                        <li><strong>Best time:</strong> 6:30-7:30 AM</li>
                        <li><strong>Promenade deck:</strong> Complete circuit around ship</li>
                        <li><strong>Fresh air:</strong> Peaceful start to the day</li>
                        <li><strong>Photography:</strong> Golden hour lighting</li>
                        <li><strong>Exercise:</strong> 3 laps = approximately 1 mile</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// Ship modal functions
function openShipModal(shipKey) {
    const modal = document.getElementById('shipModal');
    const modalBody = document.getElementById('shipModalBody');
    
    if (shipData[shipKey]) {
        modalBody.innerHTML = `
            <h2>${shipData[shipKey].title}</h2>
            ${shipData[shipKey].content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeShipModal() {
    const modal = document.getElementById('shipModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Update window click handler to include ship modal
window.onclick = function(event) {
    const portModal = document.getElementById('portModal');
    const setupModal = document.getElementById('setupModal');
    const shipModal = document.getElementById('shipModal');
    
    if (event.target === portModal) {
        closePortModal();
    }
    if (event.target === setupModal) {
        closeSetupModal();
    }
    if (event.target === shipModal) {
        closeShipModal();
    }
}

// Update keyboard navigation for ship modal
document.addEventListener('keydown', function(e) {
    const portModal = document.getElementById('portModal');
    const setupModal = document.getElementById('setupModal');
    const shipModal = document.getElementById('shipModal');
    
    if (e.key === 'Escape') {
        if (portModal.style.display === 'block') {
            closePortModal();
        }
        if (setupModal.style.display === 'block') {
            closeSetupModal();
        }
        if (shipModal.style.display === 'block') {
            closeShipModal();
        }
    }
});


// Currency conversion functions
function swapCurrencies() {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    
    // Swap the values
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    
    // If there's an amount, convert it automatically
    const amountInput = document.getElementById('amount-input');
    if (amountInput.value) {
        convertCurrency();
    }
}

// Simple exchange rates (in a real app, these would come from an API)
const exchangeRates = {
    'USD': { 'EUR': 0.92, 'GBP': 0.79, 'CHF': 0.88, 'HRK': 6.8, 'CAD': 1.36, 'AUD': 1.52 },
    'EUR': { 'USD': 1.09, 'GBP': 0.86, 'CHF': 0.96, 'HRK': 7.4, 'CAD': 1.48, 'AUD': 1.65 },
    'GBP': { 'USD': 1.27, 'EUR': 1.16, 'CHF': 1.11, 'HRK': 8.6, 'CAD': 1.72, 'AUD': 1.92 },
    'CHF': { 'USD': 1.14, 'EUR': 1.04, 'GBP': 0.90, 'HRK': 7.7, 'CAD': 1.55, 'AUD': 1.73 },
    'HRK': { 'USD': 0.15, 'EUR': 0.14, 'GBP': 0.12, 'CHF': 0.13, 'CAD': 0.20, 'AUD': 0.22 },
    'CAD': { 'USD': 0.74, 'EUR': 0.68, 'GBP': 0.58, 'CHF': 0.65, 'HRK': 5.0, 'AUD': 1.12 },
    'AUD': { 'USD': 0.66, 'EUR': 0.61, 'GBP': 0.52, 'CHF': 0.58, 'HRK': 4.5, 'CAD': 0.89 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount-input').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    if (fromCurrency === toCurrency) {
        document.getElementById('converted-amount').value = amount.toFixed(2);
        document.getElementById('exchange-rate-display').textContent = `1 ${fromCurrency} = 1 ${toCurrency}`;
        return;
    }
    
    const rate = exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency];
    
    if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('converted-amount').value = convertedAmount;
        document.getElementById('exchange-rate-display').textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
    } else {
        document.getElementById('converted-amount').value = 'Rate not available';
        document.getElementById('exchange-rate-display').textContent = 'Exchange rate not available for this pair';
    }
}

function clearAmount() {
    document.getElementById('amount-input').value = '';
    document.getElementById('converted-amount').value = '';
    document.getElementById('exchange-rate-display').textContent = 'Exchange rate will appear here';
}

function copyAmount() {
    const convertedAmount = document.getElementById('converted-amount').value;
    if (convertedAmount && convertedAmount !== 'Rate not available') {
        navigator.clipboard.writeText(convertedAmount).then(() => {
            const button = document.querySelector('.copy-amount-btn');
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.background = '#27ae60';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#95a5a6';
            }, 2000);
        });
    }
}

// Auto-convert when amount or currencies change
document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount-input');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    
    if (amountInput && fromCurrency && toCurrency) {
        amountInput.addEventListener('input', function() {
            if (this.value) {
                convertCurrency();
            }
        });
        
        fromCurrency.addEventListener('change', function() {
            if (amountInput.value) {
                convertCurrency();
            }
        });
        
        toCurrency.addEventListener('change', function() {
            if (amountInput.value) {
                convertCurrency();
            }
        });
    }
});

