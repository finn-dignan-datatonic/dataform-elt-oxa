// This file contains re-usable documentation for tables & fields across the codebase

// Global Documentation
const insertion_timestamp = "Timestamp when the record was ingested into this table";
const source_partition_timestamp = "Timestamp used to partition the table";

// Identifier fields
const message_id = "Id field of the message";
const message_description= "Description of the message";
const sender= "Who sent the message";
const sender_email= "Email of who sent the email";

module.exports = {
    insertion_timestamp,
    source_partition_timestamp,
    message_id,
    message_description,
    sender,
    sender_email
}