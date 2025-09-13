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

