import lengthsHist from "../../../assets/Histogram of protein lengths for Geobacter metallireducens .png"
import intervalMin from "../../../assets/Intervals between CDS on - strand.png"
import intervalPlus from "../../../assets/Intervals between CDS on + strand.png"
import intersectMin from "../../../assets/Intersecting CDS on - strand.png"
import intesectPlus from "../../../assets/Intersecting CDS on + strand.png"
import intersection from "../../../assets/CDS interactions.png"
import graph from "../../../assets/Screenshot 2026-02-28 154330.png"

export default function Minireview() {
	const handleLinkClick = () => {
		const references = document.getElementById("references")
		references.scrollIntoView({behavior: "smooth"})
	}
	return (
		<section>
			<section>
				<header className="mb-12 flex flex-col items-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
						<p className="text-gradient">Mini-review</p>
						<p className="text-gradient">of</p>
						<p>
              <span className="italic text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block">
                Geobacter metallireducens
              </span>
						</p>
					</h2>
					<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
				</header>
			</section>
			
			<section className="flex-col items-center justify-center text-center">
				<section className="mt-10">
					<h3 className="text-2xl font-semibold text-primary-500 dark:text-shadow-glow dark:text-glow-500 mb-3">
						Abstract
					</h3>
					<p>
						This mini-review presents the analysis of the genome of{' '}
						<span className="italic">Geobacter metallireducens</span>, focusing on CDS in its feature
						table. The study has calculated protein lengths of the CDSs. The genetic organization
						has been analyzed by identifying the distances between CDSs. The more detailed research
						of the close CDS revealed that some of them are densely clustered and overlapped,
						suggesting operon structures that coordinate expression of these genes.
					</p>
				</section>
				
				<section className="mt-10">
					<h3 className="text-2xl font-semibold text-primary-500 dark:text-shadow-glow dark:text-glow-500 mb-3">
						Introduction
					</h3>
					<p>
						<span className="italic">Geobacter metallireducens</span> is a gram-negative strict
						anaerobe metal-reducing proteobacterium{' '}
						<button type="button" onClick={() => handleLinkClick()} className="link-primary">[1]</button>. Detailed taxonomy is provided in
						Table 1.
					</p>
					
					<div className="mt-7">
						<p>
							Table 1. Taxonomy of <span className="italic">G. metallireducens</span>
						</p>
						<div className="rounded-2xl border border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full mt-3">
							<div className="overflow-x-auto">
								<table className="w-full border-x-0">
									<tbody>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Domain
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Bacteria
										</td>
									</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Kingdom
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Pseudomonadati
										</td>
									</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Phylum
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Thermodesulfubacteriota
										</td>
									</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Class
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Desulfuromonadia
										</td>
									</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Order
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Geobacterales
										</td>
									</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Family
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Geobacteraceae
										</td>
									</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Genus
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Geobacter
										</td>
									</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
										<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
											Species
										</td>
										<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
											Geobacter metallireducens Lovley et al. 1995
										</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					
					<div className="flex-col items-center justify-center space-y-2 mt-10 text-left">
						<p>
							This bacterium gets energy by oxidizing different organic compounds with Fe(III) or
							Mn(IV) as the electron acceptor <button type="button" onClick={() => handleLinkClick()} className="link-primary">[1]</button>.
							However, it's been shown that it can reduce other metals, such as vanadium{' '}
							<button type="button" onClick={() => handleLinkClick()} className="link-primary">[2]</button>, uranium{' '}
							<button type="button" onClick={() => handleLinkClick()} className="link-primary">[3]</button>, technetium{' '}
							<button type="button" onClick={() => handleLinkClick()} className="link-primary">[4]</button>, plutonium{' '}
							<button type="button" onClick={() => handleLinkClick()} className="link-primary">[5]</button> and even Hg(II){' '}
							<button type="button" onClick={() => handleLinkClick()} className="link-primary">[6]</button> so it can be used for
							bioremediation <button type="button" onClick={() => handleLinkClick()} className="link-primary">[2,3,7]</button>.
						</p>
						
						<p>
							<span className="italic">G. metallireducens</span> is the first known microorganism to
							display chemotactic tendencies for iron and manganese. When bacteria grow in an
							environment with soluble Fe(III) and Mn(IV) compounds they lack flagella and pili, but
							when there are no such compounds, the bacterium produces a flagellum to relocate{' '}
							<button type="button" onClick={() => handleLinkClick()} className="link-primary">[8]</button>.
						</p>
						
						<p>
							Another interesting physiological feature is the ability to make electrical connections
							with each other or another species, in this process pili conduct electrical current, to
							perform syntrophic metabolism of organic substrates{' '}
							<button type="button" onClick={() => handleLinkClick()} className="link-primary">[9,10]</button>.
						</p>
						
						<p>
							In this study I analysed the genome and proteome of the{' '}
							<span className="italic">Geobacter metallireducens</span> to identify its
							characteristics and reveal some interesting features.
						</p>
					</div>
				</section>
				
				<section className="mt-10 space-y-4">
					<h3 className="text-2xl font-semibold text-primary-500 dark:text-shadow-glow dark:text-glow-500 mb-3">
						Materials and methods
					</h3>
					<p className="text-right">
						1. The feature table of <span className="italic">G. metallireducens</span> was taken from
						ncbi genomes database All histograms were made with google sheets with the COUNTIFS
						function, the quantity of matching values for each interval has been shifted along the y
						- axis. On the x - axis were intervals themselves.
					</p>
					<p className="text-right">
						2. Protein lengths were found with three step mathematical operation: by dividing by 3
						the differences between stop and start of a CDS (stop - start)/3 - 1. The average protein
						was found with AVG function.
					</p>
					<p className="text-right">
						3. The intervals between CDS were found by the difference between start of the one CDS
						and the stop of the CDS before it. But before that all CDS were sorted by three columns:
						start, stop and strand. (sorting by strand allows filtering + and - strands by the
						COUNTIFS function).
					</p>
					<p className="text-right">
						4. The intersections were found the same way as intervals but 1 was added to the result,
						so it displays not the interval, but the number of common nucleotides for both CDSs.
					</p>
					<p className="text-right">
						<p>
							5. The interacting regions were found and analyzed with python programming language.
						</p>{' '}
						<p>
							The script reads a csv file and has two main parameters: max_length - the maximum
							distance between two CDS, and min_count - the minimum number of the CDS in the one
							interacting region. The output is also a csv file, which can be easily analysed with
							google sheets.
						</p>
						<p>
							The graph for finding the best max_length parameter was created with matplotlib.pyplot
							library.
						</p>
					</p>
					
					<p className="text-center mt-10">
						All supplementary materials can be found in the similarly named section.
					</p>
				</section>
				
				<section className="mt-10">
					<h3 className="text-2xl font-semibold text-primary-500 dark:text-shadow-glow dark:text-glow-500 mb-3">
						Results
					</h3>
					<h4 className="text-lg font-semibold mb-2 mt-8">Protein lengths</h4>
					<p>
						The genome of <span className="italic">Geobacter metallireducens</span> has 3623 protein
						coding sequences, which vary in length from 25 to 3482 amino acids. The histogram of
						protein lengths provided in Figure 1. The counted average protein size is about 340
						residues. (It’s interesting, that amount of proteins with size from 180 to 240 breaks out
						from the general pattern and it is 50 CDSs less than neighboring from the both sides)
					</p>
					<img alt="Figure 1" className="rounded-2xl my-7  mx-auto block w-1/2" src={lengthsHist}/>
					<label>Figure 1. Histogram of protein lengths for G. metallireducens</label>
					
					<h4 className="text-lg font-semibold mb-2 mt-8">Inter CDS intervals</h4>
					<p>
						<p>Bacteria differ in genome organization. To study this feature on{' '}
							<span className="italic">G. metallireducens</span> chromosome intervals between CDSs were
							analyzed. The histograms of intervals lengths are provided in Figure 2 and Figure 3,
							respectively.</p> <p>Almost a third of the CDSs have a distance between each other less than 21
						nucleotides. So there is a question: do they interact, have similar functions or maybe
						can even be a part of the same operon?</p> <p>It is worth noticing that half of these close
						CDSs have intervals with the length below 0. It means that CDSs intersect. Such
						intersections have been studied in more detail in the next section.</p>
					</p>
					<img alt="Figure 2" className="rounded-2xl my-7  mx-auto block w-1/2" src={intervalPlus}/>
					<label>Figure 2. Histogram of intervals between CDS on + strand</label>
					<img alt="Figure 3" className="rounded-2xl my-7  mx-auto block w-1/2" src={intervalMin}/>
					<label>Figure 3. Histogram of intervals between CDS on - strand</label>
					<h4 className="text-lg font-semibold mb-2 mt-8">CDS intersections</h4>
					<p>
						Analysis of the intervals between CDSs on the chromosome of{' '}
						<span className="italic">G. metallireducens</span> revealed that some of them intersect.
						The histograms of intersections lengths for + and - strands are displayed in Figure 4 and
						Figure 5, respectively.
					</p>
					<p>
						<p>On both strands the most frequent value is 4 nt and there are absolutely no examples of
							lengths 2, 3, 5 or 6 nt. It is hard not to notice that the difference between the first
							three non-zero columns is 3 nt - exactly one codon.</p> <p>The number of intersecting genes is
						almost similar on + and - strands, but on - second one there are more big intersections,
						up to 104 nucleotides.</p> <p>The sum is 263 CDSs on + strand and 251 on - strand. It is about
						(263 + 251) / 3596 = 0,1429… 14,3% of the total number of CDSs.</p>
					</p>
					<p>
						As assumed in the previous section, the intersecting CDSs may play some roles in the one
						process, have similar functions and regulation and belong to a single operon or even the
						same protein. In case of the unusual metabolic pathways of{' '}
						<span className="italic">G. metallireducens</span> it is expected to see a lot of
						operons, connected with metal metabolism, such as ion channels, transporters and
						cytochromes and specific metal-reducing enzymes. To explore these assumptions there has
						been the functional analysis of the close CDSs. The results are discussed in section 4.
					</p>
					<img alt="Figure 4" className="rounded-2xl my-7  mx-auto block w-1/2" src={intesectPlus}/>
					<label>Figure 4. Histogram of intersected CDS on + strand</label>
					<img alt="Figure 5" className="rounded-2xl my-7  mx-auto block w-1/2" src={intersectMin}/>
					<label>Figure 5. Histogram of intersected CDS on - strand</label>
					
					<h4 className="text-lg font-semibold mb-2 mt-8">Interacting CDS analysis</h4>
					<p>
						The analysis showed that CDSs with the short intervals between each other have similar
						functions or take part in the same process, so that means, they, indeed, form operons.
					</p>
					<p>
						To define the best max_length parameter a graph [See Fig. 6] was plotted with max_length
						on the x-axis and the number of clusters on the y-axis. From max_length=33 the rapid
						growth stops, so this value has been chosen for further analysis. All foundeded clusters are shown in Interaction regions for max_length=33 table
					</p>
					<p>
						Analysis with max_length parameter = 33 showed 731 interacting regions. The number of
						CDSs in the regions are illustrated in Figure 7.
					</p>
					<p>
						Consistent with the assumption above, there are a lot of clusters connected to
						metal-reduction and other unusual metabolic pathways (e.g. № 30, № 431). Also as <span className="italic">G. metallireducens</span> is capable of direct
						electron transfer with pili, operons connected to them are also present in the genome
						(e.g. № 499).
					</p>
					<p>
						The longest interacting region consists of 34 CDS and has to play a significant role in
						translation (№ 452). Another interesting region is part of the phage
						genome, inserted in the chromosome (№ 519).
					</p>
					<p>
						With this analysis functions of the unknown proteins can be predicted. E. g. The
						hypothetical protein from the region № 14 probably plays a role in the mercury(II)
						metabolism, because it is closely connected with the mercury (II) reductase. A batch of
						unidentified products from the № 457 region, are likely to take part in nitrogen
						regulation, as does one of their neighbouring CDS.
					</p>
					
					<img alt="Figure 6" className="rounded-2xl my-7 mx-auto block w-1/2" src={graph}/>
					<label>Figure 6. Number of regions from max_length parameter</label>
					<img alt="Figure 7" className="rounded-2xl my-7 mx-auto block w-1/2" src={intersection}/>
					<label>Figure 7. Histogram of numbers of CDS in the interacting region for max_length=33</label>
					
				</section>
				
				<section className="mt-10">
					<h3 className="text-2xl font-semibold text-primary-500 dark:text-shadow-glow dark:text-glow-500 mb-3">
						Supplementary materials
					</h3>
					<p>
						<ul className="text-left">
							<li><a target="_blank" className="link-primary" href="https://docs.google.com/spreadsheets/d/1Pug_dVgN64SWtWpYACjf6n40ireCTpyiNQ5M8KFXc_U/edit?usp=sharing">Feature table of G. metallireducens</a></li>
							<li><a target="_blank" className="link-primary" href="https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/012/925/GCF_000012925.1_ASM1292v1/">The genome of G. metallireduscens in NCBI database</a></li>
						<li><a target="_blank" className="link-primary" href="https://docs.google.com/spreadsheets/d/1F7vA-wDnbBMvlVH8vGUqnXES4Luk0IcB7Hh6xUynLb8/edit?usp=sharing">Protein lengths table</a></li>
						<li><a target="_blank" className="link-primary" href="https://docs.google.com/spreadsheets/d/1F7vA-wDnbBMvlVH8vGUqnXES4Luk0IcB7Hh6xUynLb8/edit?usp=sharing">Intervals between CDS table</a></li>
						<li><a target="_blank" className="link-primary" href="https://docs.google.com/spreadsheets/d/1BdVf6s1RdR2WuA-NKSSywsXQCpfNL_xtR44IE3uoO28/edit?usp=sharing">Intersections between CDS table</a></li>
						<li><a target="_blank" className="link-primary" href="https://docs.google.com/spreadsheets/d/1aNPg25WZRL81-bxtLZBu46q6mhbvDpKhDzcBPoK0t2g/edit?usp=sharing">Interaction regions for max_length=33 table</a></li>
						<li><a target="_blank" className="link-primary" href="https://drive.google.com/file/d/1otku6V8n7M7q6S7XtNCtmlO7Se3A0P20/view?usp=sharing">Input csv file for the python program</a></li>
						<li><a target="_blank" className="link-primary"  href="https://colab.research.google.com/drive/1Rvb2IPvBGlAjX6L905SgxlubPDQbWWer?usp=sharing">Python script finding interacting regions</a></li>
						</ul>
						
					</p>
				</section>
				
				<section className="mt-10" id="references">
					<h3 className="text-2xl font-semibold text-primary-500 dark:text-shadow-glow dark:text-glow-500 mb-3">
						References
					</h3>
					<div className="text-left space-y-2">
						<p>
							[1] Lovley DR, Giovannoni SJ, White DC, Champine JE, Phillips EJ, Gorby YA, Goodwin S
							(1993). "Geobacter metallireducens gen. nov. sp. nov., a microorganism capable of
							coupling the complete oxidation of organic compounds to the reduction of iron and other
							metals". Archives of Microbiology. 159 (4): 336–344.{' '}
							<a href="https://doi.org/10.1007%2FBF00290916" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>{' '}
							<a href="https://pubmed.ncbi.nlm.nih.gov/8387263" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[PubMed]</a>
						</p>
						<p>
							[2] Koribanics NM, Tuorto SJ, Lopez-Chiaffarelli N, McGuinness LR, Häggblom MM, Williams
							KH, Long PE, Kerkhof LJ (2015). "Spatial distribution of an uranium-respiring
							betaproteobacterium at the Rifle, CO field research site". PLOS ONE. 10 (4){' '}
							<a href="https://doi.org/10.1371%2Fjournal.pone.0123378" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>{' '}
							<a href="https://pubmed.ncbi.nlm.nih.gov/25874721" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[PubMed]</a>.
						</p>
						<p>
							[3] Ortiz-Bernad, Irene; Anderson, Robert T.; Vrionis, Helen A.; Lovley, Derek R. (May
							2004). "Vanadium Respiration by Geobacter metallireducens: Novel Strategy for In Situ
							Removal of Vanadium from Groundwater". Applied and Environmental Microbiology. 70 (5):
							3091–3095.{' '}
							<a href="https://doi.org/10.1128%2FAEM.70.5.3091-3095.2004" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>{' '}
							<a href="https://pubmed.ncbi.nlm.nih.gov/15128571" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[PubMed]</a>.
						</p>
						<p>
							[4] Lloyd JR, Sole VA, Van Praagh CV, Lovley DR. (2000) Direct and Fe(II)-mediated
							reduction of technetium by Fe(III)-reducing bacteria. Appl Environ Microbiol. 66:
							3743–3749.{' '}
							<a href="https://doi.org/10.1128/AEM.66.9.3743-3749.2000" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>{' '}
							<a href="https://pubmed.ncbi.nlm.nih.gov/10966385/" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[PubMed]</a>
						</p>
						<p>
							[5] Lloyd JR, Chesnes J, Glasauer S, Bunker DJ, Livens FR, Lovley DR. (2002) Reduction
							of actinides and fission products by Fe(III)-reducing bacteria. Geomicrobiology Journal.
							19: 103–120.{' '}
							<a href="https://doi.org/10.1080/014904502317246200" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>{' '}
							<a href="https://scholar.google.com/scholar_lookup?journal=Geomicrobiology%20Journal&title=Reduction%20of%20actinides%20and%20fission%20products%20by%20Fe(III)-reducing%20bacteria&author=JR%20Lloyd&author=J%20Chesnes&author=S%20Glasauer&author=DJ%20Bunker&author=FR%20Livens&volume=19&publication_year=2002&pages=103-120&doi=10.1080/014904502317246200&" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[Google Scholar]</a>
						</p>
						<p>
							[6] Wiatrowski, Heather A.; Ward, Paula M.; Barkay, Tamar (2006). "Novel Reduction of
							Mercury(II) by Mercury-Sensitive Dissimilatory Metal Reducing Bacteria". Environmental
							Science & Technology. 40 (20): 6690–6695.{' '}
							<a href="https://doi.org/10.1021/es061046g" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>.
						</p>
						<p>
							[7] Anderson, Robert T.; Vrionis, Helen A.; Ortiz-Bernad, Irene; Resch, Charles T.;
							Long, Philip E.; Dayvault, Richard; Karp, Ken; Marutzky, Sam; Metzler, Donald R.;
							Peacock, Aaron; White, David C.; Lowe, Mary; Lovley, Derek R. (October 2003).
							"Stimulating the In Situ Activity of Geobacter Species To Remove Uranium from the
							Groundwater of a Uranium-Contaminated Aquifer". Applied and Environmental Microbiology.
							69 (10): 5884–5891.{' '}
							<a href="https://doi.org/10.1128/aem.69.10.5884-5891.2003" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>{' '}
							<a href="https://pubmed.ncbi.nlm.nih.gov/14532040/" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[PubMed]</a>
						</p>
						<p>
							[8] Childers, Susan E.; Ciufo, Stacy; Lovley, Derek R. (April 2002). "Geobacter
							metallireducens accesses insoluble Fe(iii) oxide by chemotaxis". Nature. 416 (6882):
							767–769.{' '}
							<a href="https://doi.org/10.1038%2F416767a" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>
						</p>
						<p>
							[9] Dubé, Charles-David; Guiot, Serge R. (2015), Guebitz, Georg M.; Bauer, Alexander;
							Bochmann, Guenther; Gronauer, Andreas (eds.), "Direct Interspecies Electron Transfer in
							Anaerobic Digestion: A Review", Biogas Science and Technology. 151, 101–115{' '}
							<a href="https://doi.org/10.1007%2F978-3-319-21993-6_4" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>
						</p>
						<p>
							[10] Jinjie Zhou; Jessica A. Smith; Meng Li; Dawn E. Holmes; Terry C. Hazen; (2023)
							Methane production by Methanothrix thermoacetophila via direct interspecies electron
							transfer with Geobacter metallireducens, mBio. 14 (4).{' '}
							<a href="https://doi.org/10.1128/mbio.00360-23" className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 hover:underline!" target="_blank">[DOI]</a>
						</p>
					</div>
				</section>
			</section>
		</section>
	);
}