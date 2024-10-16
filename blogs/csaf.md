These final three subsections document the three properties of a CSAF document. The single mandatory property document, as well as the optional properties product_tree and vulnerabilities in that order.


## Document level
- Document level meta-data (document) of value type object with the 5 mandatory properties Category (category), CSAF Version (csaf_version), Publisher (publisher), Title (title), These caputres the  meta-data about this document describing a particular set of security advisories.

- In addition, the document object MAY provide the 7 optional properties Acknowledgments (acknowledgments), Aggregate Severity (aggregate_severity), Distribution (distribution), Language (lang), Notes (notes), References (references), and Source Language (source_lang).
- 
- Title of this document (title) of value type string with 1 or more characters SHOULD be a canonical name for the document, and sufficiently unique to distinguish it from similar documents.

- Tracking (tracking) of value type object with the six mandatory propertiesCurrent Release Date (current_release_date), Identifier (id), Initial Release Date (initial_release_date), Revision History (revision_history),


## Product Tree
- Product Tree (product_tree) has value type object with 1 or more properties is a container for all fully qualified product names that can be referenced elsewhere in

## Vulnerabilities Property
- Vulnerabilities (vulnerabilities) of value type array with 1 or more objects representing vulnerabilities and providing 1 or more properties represents a list of all relevant vulnerability information items.

- The Vulnerability item of value type object with 1 or more properties is a container for the aggregation of all fields that are related to a single vulnerability in the document. Any vulnerability MAY provide the optional properties Acknowledgments (acknowledgments), Common Vulnerabilities and Exposures (CVE) (cve), Common Weakness Enumeration (CWE) (cwe), Discovery Date (discovery_date), Flags (flags), IDs (ids), Involvements (involvements), Notes (notes), Product Status (product_status), References (references), Release Date (release_date), Remediations (remediations), Scores (scores), Threats (threats), and Title (title).
- CWE (cwe) of value type object with the 2 mandatory properties Weakness ID (id) and Weakness Name (name) holds the MITRE standard Common Weakness Enumeration (CWE) for the weakness associated
- Vulnerability notes (notes) of value type Notes Type (notes_t) holds notes associated with this vulnerability item.
- Product status (product_status) of value type object with 1 or more properties contains different lists of product_ids which provide details on the status of the referenced product related to the current vulnerability.The eight defined properties are First affected (first_affected), First fixed (first_fixed), Fixed (fixed), Known affected (known_affected), Known not affected (known_not_affected), Last affected (last_affected), Recommended (recommended), and Under investigation (under_investigation) are all of value type Products (products_t).
- Every Remediation item of value type object with the 2 mandatory properties Category (category) and Details (details) specifies details on how to handle (and presumably, fix) a vulnerability. At least one of the optional elements Group IDs (group_ids) and Product IDs (product_ids) MUST be present to state for which products or product groups this remediation is applicable. any Remediation MAY expose the six optional properties Date (date), Entitlements (entitlements), Group IDs (group_ids), Product IDs (product_ids), Restart required (restart_required), and URL (url).
- Remediation categories are as follows: 
```
    mitigation
    no_fix_planned
    none_available
    vendor_fix
    workaround
```
- Here the value mitigation indicates that the remediation contains information about a configuration or deployment scenario that helps to reduce the risk of the vulnerability but that does not resolve the vulnerability on the affected product. All these categories looks similar in all vunerability values
- Vulnerabilities Property - Scores is type array with 1 or more items of type score holds a list of score objects for the current vulnerability.
- Vulnerabilities Property - Threats type array with 1 or more. 





## Data type
- List of Acknowledgments (acknowledgments_t) type instances of value type array with 1 or more elements contain a list of Acknowledgment elements
- Common Vulnerabilities and Exposures (CVE)
- List of notes (notes_t) of value type array with 1 or more items of type Note contains notes which are specific to the current context. Value type of every such Note item is object with the mandatory properties category and text providing a place to put all manner of text blobs related to the current context. A Note object MAY provide the optional properties audience and title.
- 